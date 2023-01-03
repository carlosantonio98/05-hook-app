import { todoReducer } from '../../src/08-useReducer/todoReducer';

describe('Pruebas en el todoReducer', () => {

    const initialState = [{
        id: 1,
        description: 'Demo Todo',
        done: false
    }];

    test('Debe de regresar el estado inicial', () => {

        // Los objetos pasan por referencia cuando estos son enviados como parámetros a través de funciones
        const newState = todoReducer( initialState, {});

        // Al pasar el objeto como referencia, nosotros podemos usar el toBe ya que lo que esperamos es que evalue que sea identico, que sea el mismo objeto, que sea el mismo tipo, que si el objeto esta apuntando al mismo lugar en memoria
        expect( newState ).toBe( initialState );

    });

    test('Debe de agregar un todo', () => {

        const action = {
            type: '[TODO] Add Todo',
            payload: {
                id: 2,
                description: 'Nuevo todo #2',
                done: false
            }
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 2 );

        // El toContain es parecido al toEqual porque tambien evalua que los valores sean el contenido que nosotros esperamos y no el mismo espacio en memoria, el toContain es genial ya que nos permite evaluar que el arreglo newState contenga el payload del action.
        expect( newState ).toContain( action.payload );

    });

    test('Debe de eliminar un TODO', () => {

        const action = {
            type: '[TODO] Remove Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );

        expect( newState.length ).toBe( 0 );

    });

    test('Debe de realizar el Toggle del todo', () => {

        const action = {
            type: '[TODO] Toggle Todo',
            payload: 1
        }

        const newState = todoReducer( initialState, action );
        expect( newState[0].done ).toBe( true );
        
        const newState2 = todoReducer( newState, action );
        expect( newState2[0].done ).toBe( false );
    });

});