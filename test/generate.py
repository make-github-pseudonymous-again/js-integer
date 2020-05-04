import operator

MAX_NUMBER = 2**53 - 1
MIN_NUMBER = -2**53

hugenumbers = sorted([
    91**7 ,
    2**30 ,
    3**50
])

smallnumbers = sorted([ 1 , 3 , 7 , 9 , 11 , 17 , 22 , 24 , 27 , 29 , 1234 , 5678 ])

arithmetic = {
    'add' : {
        'numbers' : smallnumbers + hugenumbers ,
        'apply' : operator.add ,
        'str' : '+'
    } ,
    'sub' : {
        'numbers' : smallnumbers + hugenumbers ,
        'apply' : operator.sub ,
        'str' : '-'
    } ,
    'mul' : {
        'numbers' : smallnumbers + hugenumbers ,
        'apply' : operator.mul ,
        'str' : '*'
    } ,
    'pow' : {
        'numbers' : smallnumbers ,
        'apply' : operator.pow ,
        'str' : '^'
    } ,
    'div' : {
        'numbers' : smallnumbers + hugenumbers ,
        'apply' : operator.floordiv ,
        'str' : '/'
    } ,
    'mod' : {
        'numbers' : smallnumbers + hugenumbers ,
        'apply' : operator.mod ,
        'str' : '%'
    }
}

def write ( f , numbers , name , t , ispow = False , isn = False , isi = False) :

    f.write("import test from 'ava' ;\n")
    f.write("import {{ parse , stringify , {} }} from '../../../../src' ;\n\n".format(name))

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


    f.write("macro.title = ( _ , A , B , C ) => `{}(${{A}},${{B}}) = ${{C}}` ;\n\n".format(name))

    if isn:
        LINE = "test( macro , '{}' , {} , '{}' ) ;\n"
    else:
        LINE = "test( macro , '{}' , '{}' , '{}' ) ;\n"

    for a in numbers :

        for b in numbers :

            x = a
            y = b
            c = t( x , y )
            if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                f.write(LINE.format(x,y,c))

            x = -a
            y = b
            c = t( x , y )
            if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                f.write(LINE.format(x,y,c))

            if not ispow:

                x = a
                y = -b
                c = t( x , y )
                if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                    f.write(LINE.format(x,y,c))

                x = -a
                y = -b
                c = t( x , y )
                if not isn or MIN_NUMBER <= y <= MAX_NUMBER:
                    f.write(LINE.format(x,y,c))

def open_and_write ( opname , t , nb , **kwargs ) :
    with open( 'test/src/integer/arithmetic/{}.js'.format(opname) , 'w' ) as f :
        write( f , nb , opname , t , **kwargs )

for name , op in arithmetic.items():

    t = op['apply']
    nb = op['numbers']

    ispow = name == 'pow'

    # standard op
    open_and_write( name , t , nb , ispow = ispow )
    # in-place op
    open_and_write( 'i' + name , t , nb , isi = True , ispow = ispow )
    # standard op with number arg
    open_and_write( name + 'n' , t , nb , isn = True , ispow = ispow )
    # in-place op with number arg
    open_and_write( 'i' + name + 'n' , t , nb , isi = True , isn = True , ispow = ispow )
