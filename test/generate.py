import operator

arithmetic = {
    'add' : {
        'apply' : operator.add ,
        'str' : '+'
    } ,
    'sub' : {
        'apply' : operator.sub ,
        'str' : '-'
    } ,
    'mul' : {
        'apply' : operator.mul ,
        'str' : '*'
    } ,
    # 'pow' : {
        # 'apply' : operator.pow ,
        # 'str' : '^'
    # } ,
    'div' : {
        'apply' : operator.floordiv ,
        'str' : '/'
    } ,
    'mod' : {
        'apply' : operator.mod ,
        'str' : '%'
    }
}

numbers = [
    1 ,
    17 ,
    91**7 ,
    2**30 ,
    3**50
]

def write ( f , name , t , opstr , a ) :

    f.write("import test from 'ava' ;\n")
    f.write("import {{ parse , stringify , {} }} from '../../../../src' ;\n\n".format(name))


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

    # standard op

    with open( 'test/src/integer/arithmetic/{}.js'.format(name) , 'w' ) as f :

        opstr = op['str']
        t = op['apply']
        a = 'A'

        write( f , name , t , opstr , a )

    # in-place op
    iname = 'i{}'.format(name)
    with open( 'test/src/integer/arithmetic/{}.js'.format(iname) , 'w' ) as f :

        opstr = op['str'] + '='
        t = op['apply']
        a = 'C'

        write( f , iname , t , opstr , a )
