import operator

hugenumbers = [
    1 ,
    17 ,
    91**7 ,
    2**30 ,
    3**50
]

smallnumbers = [ 1 , 3 , 7 , 9 , 11 , 17 , 22 , 24 , 27 , 29 ]

arithmetic = {
    'add' : {
        'numbers' : hugenumbers ,
        'apply' : operator.add ,
        'str' : '+'
    } ,
    'sub' : {
        'numbers' : hugenumbers ,
        'apply' : operator.sub ,
        'str' : '-'
    } ,
    'mul' : {
        'numbers' : hugenumbers ,
        'apply' : operator.mul ,
        'str' : '*'
    } ,
    'pow' : {
        'numbers' : smallnumbers ,
        'apply' : operator.pow ,
        'str' : '^'
    } ,
    'div' : {
        'numbers' : hugenumbers ,
        'apply' : operator.floordiv ,
        'str' : '/'
    } ,
    'mod' : {
        'numbers' : hugenumbers ,
        'apply' : operator.mod ,
        'str' : '%'
    }
}

def write ( f , numbers , name , t , opstr , a , ispow = True ) :

    f.write("import test from 'ava' ;\n")
    f.write("import {{ parse , stringify , {} }} from '../../../../src' ;\n\n".format(name))

    if ispow :

        f.write("""function macro ( t , A , B , C ) {{
    const a = parse( A ) ;
    const c = {}( a , B ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( c ) , C ) ;
}}\n\n""".format( name , a ) )

    else:

        f.write("""function macro ( t , A , B , C ) {{
    const a = parse( A ) ;
    const b = parse( B ) ;
    const c = {}( a , b ) ;
    t.is( stringify( a ) , {} ) ;
    t.is( stringify( b ) , B ) ;
    t.is( stringify( c ) , C ) ;
}}\n\n""".format( name , a ) )


    f.write("macro.title = ( _ , A , B , C ) => `${{A}} {} ${{B}} = ${{C}}` ;\n\n".format(opstr))

    for a in numbers :

        for b in numbers :

            if ispow:

                x = a
                y = b
                c = t( x , y )
                f.write("test( macro , '{}' , {} , '{}' ) ;\n".format(x,y,c))

                x = -a
                y = b
                c = t( x , y )
                f.write("test( macro , '{}' , {} , '{}' ) ;\n".format(x,y,c))

            else:

                x = a
                y = b
                c = t( x , y )
                f.write("test( macro , '{}' , '{}' , '{}' ) ;\n".format(x,y,c))

                x = -a
                y = b
                c = t( x , y )
                f.write("test( macro , '{}' , '{}' , '{}' ) ;\n".format(x,y,c))

                x = a
                y = -b
                c = t( x , y )
                f.write("test( macro , '{}' , '{}' , '{}' ) ;\n".format(x,y,c))

                x = -a
                y = -b
                c = t( x , y )
                f.write("test( macro , '{}' , '{}' , '{}' ) ;\n".format(x,y,c))

for name , op in arithmetic.items():

    t = op['apply']
    nb = op['numbers']

    # standard op
    with open( 'test/src/integer/arithmetic/{}.js'.format(name) , 'w' ) as f :

        opstr = op['str']
        a = 'A'

        write( f , nb , name , t , opstr , a , ispow = name == 'pow' )

    # in-place op
    iname = 'i{}'.format(name)
    with open( 'test/src/integer/arithmetic/{}.js'.format(iname) , 'w' ) as f :

        opstr = op['str'] + '='
        a = 'C'

        write( f , nb , iname , t , opstr , a , ispow = name == 'pow' )
