from math import ceil
from math import sqrt

MAX_NUMBER = 2**53 - 1
MIN_NUMBER = -2**53

LARGEST_BASE = ceil(sqrt(MAX_NUMBER))
LARGEST_LIMB = LARGEST_BASE - 1

print('MAX_NUMBER', MAX_NUMBER)
print('MIN_NUMBER', MIN_NUMBER)
print('LARGEST_BASE', LARGEST_BASE)
print('LARGEST_LIMB', LARGEST_LIMB)

assert(LARGEST_LIMB ** 2 < MAX_NUMBER)

hugenumbers = sorted([
    LARGEST_LIMB ,
    LARGEST_BASE ,
    91**7 ,
    2**30 ,
    3**50 ,
])

smallnumbers = sorted([ 1 , 3 , 7 , 9 , 11 , 17 , 22 , 24 , 27 , 29 , 1234 , 5678 ])

zero = [0]

arithmetic = {
    'add' : {
        'numbers' : zero + smallnumbers + hugenumbers ,
        'apply' : lambda a,b: (a+b,) ,
        'str' : '+'
    } ,
    'sub' : {
        'numbers' : zero + smallnumbers + hugenumbers ,
        'apply' : lambda a,b: (a-b,) ,
        'str' : '-'
    } ,
    'mul' : {
        'numbers' : zero + smallnumbers + hugenumbers ,
        'apply' : lambda a,b: (a*b,) ,
        'str' : '*'
    } ,
    'pow' : {
        'left' : zero + smallnumbers + hugenumbers ,
        'right' : zero + smallnumbers ,
        'apply' : lambda a,b: (a**b,) ,
        'str' : '^'
    } ,
    'div' : {
        'left' : zero + smallnumbers + hugenumbers ,
        'right' : smallnumbers + hugenumbers ,
        'apply' : lambda a,b: (a//b,) ,
        'str' : '/'
    } ,
    'mod' : {
        'left' : zero + smallnumbers + hugenumbers ,
        'right' : smallnumbers + hugenumbers ,
        'apply' : lambda a,b: (a%b,) ,
        'str' : '%'
    } ,
    'divmod' : {
        'left' : zero + smallnumbers + hugenumbers ,
        'right' : smallnumbers + hugenumbers ,
        'apply' : lambda a, b: (a // b, a % b) ,
        'str' : '/%'
    } ,
}

def write ( f , left, right , name , t , ispow = False , isn = False , isi = False) :

    outputsize = 2 if 'divmod' in name else 1

    f.write("import test from 'ava' ;\n")
    f.write("import {{ parse , stringify , {} }} from '../../../../src' ;\n\n".format(name))

    if outputsize == 2 :

        if isn :

            f.write("""function macro ( t , A , B , C , D ) {{
    const a = parse( A ) ;
    const [c, d] = {}( a , B ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( c ) , C ) ;
    t.is( stringify( d ) , D ) ;
}}\n\n""".format( name , 'D' if isi else 'A'  ) )

        else:

            f.write("""function macro ( t , A , B , C , D ) {{
    const a = parse( A ) ;
    const b = parse( B ) ;
    const [c, d] = {}( a , b ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( b ) , B ) ;
    t.is( stringify( c ) , C ) ;
    t.is( stringify( d ) , D ) ;
}}\n\n""".format( name , 'D' if isi else 'A' ) )

    else :

        if isn :

            f.write("""function macro ( t , A , B , C ) {{
    const a = parse( A ) ;
    const c = {}( a , B ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( c ) , C ) ;
}}\n\n""".format( name , 'C' if isi else 'A'  ) )

        else:

            f.write("""function macro ( t , A , B , C ) {{
    const a = parse( A ) ;
    const b = parse( B ) ;
    const c = {}( a , b ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( b ) , B ) ;
    t.is( stringify( c ) , C ) ;
}}\n\n""".format( name , 'C' if isi else 'A' ) )


    if outputsize == 2 :

        f.write("macro.title = ( _ , A , B , C , D ) => `{}(${{A}},${{B}}) = [${{C}},${{D}}]` ;\n\n".format(name))

        if isn:
            LINE = "test( macro , '{}' , {} , '{}' , '{}' ) ;\n"
        else:
            LINE = "test( macro , '{}' , '{}' , '{}' , '{}' ) ;\n"

    else:

        f.write("macro.title = ( _ , A , B , C ) => `{}(${{A}},${{B}}) = ${{C}}` ;\n\n".format(name))

        if isn:
            LINE = "test( macro , '{}' , {} , '{}' ) ;\n"
        else:
            LINE = "test( macro , '{}' , '{}' , '{}' ) ;\n"

    for a in left :

        for b in right :

            x = a
            y = b
            c = t( x , y )
            if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                f.write(LINE.format(x,y,*c))

            if a != 0:
                x = -a
                y = b
                c = t( x , y )
                if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                    f.write(LINE.format(x,y,*c))

            if not ispow:

                if b != 0:
                    x = a
                    y = -b
                    c = t( x , y )
                    if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                        f.write(LINE.format(x,y,*c))

                    if a != 0:
                        x = -a
                        y = -b
                        c = t( x , y )
                        if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                            f.write(LINE.format(x,y,*c))

def open_and_write ( opname , t , left , right , **kwargs ) :
    with open( 'test/src/integer/arithmetic/{}.js'.format(opname) , 'w' ) as f :
        write( f , left , right , opname , t , **kwargs )

for name , op in arithmetic.items():

    t = op['apply']

    left = op.get('left', op.get('numbers'))
    right = op.get('right', op.get('numbers'))

    ispow = name == 'pow'

    # standard op
    open_and_write( name , t , left , right , ispow = ispow )
    # in-place op
    open_and_write( 'i' + name , t , left , right , isi = True , ispow = ispow )
    # standard op with number arg
    open_and_write( name + 'n' , t , left , right , isn = True , ispow = ispow )
    # in-place op with number arg
    open_and_write( 'i' + name + 'n' , t , left , right , isi = True , isn = True , ispow = ispow )
