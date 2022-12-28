const { renderHook, act } = require("@testing-library/react");
const { useCounter } = require("../../src/hooks/useCounter");

describe('Pruebas en el useCounter', () => {
    test('Debe de retornar los valores por defecto', () => {

        const { result } = renderHook( () => useCounter() );
        const { counter, decrement, increment, reset } = result.current;

        expect( counter ).toBe(10);
        expect( decrement ).toEqual( expect.any( Function ) );
        expect( increment ).toEqual( expect.any( Function ) );
        expect( reset ).toEqual( expect.any( Function ) );
    });

    test('Debe de generar el counter con el valor de 100', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter } = result.current;

        expect( counter ).toBe( 100 );
    });

    test('Debe de incrementar el contador', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { counter, increment } = result.current;

        act(() => {
            increment();
            increment( 2 ); // esto solo se incrementara de manera correcta si en la función de incrementar se actualiza el estado de la siguiente manera: setCounter( (current) => current + value ); ya que si no lo hacemos así estariamos en el mismo problema del counter de aquí, ya que de igual manera alla no se actualiza el estado con los valores actuales.
        });

        // cuando nosotros estamos trabajando con valores primitivos, como por ejemplo un string, un número, un boleano, o algo por el estilo, entonces esos valores se extraen y se crea una nueva variable, por lo cual el counter siempre tiene el mismo  valor asi como lo extrajimos, si el counter fuera un objeto la cosa seria diferentes ya que los objetos pasan por referencia.
        // Entonces lo ideal en este caso seria, en lugar de tomar ese counter, tomar el result.current.counter ya que este nos va a dar el valor que se encuentra actualmente en el counter
        
        // expect( counter ).toBe(101);
        expect( result.current.counter ).toBe( 103 );
    });

    test('Debe de decrementar el contador', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { decrement } = result.current;

        act(() => {
            decrement();
            decrement( 2 );
        });

        expect( result.current.counter ).toBe( 97 );
    });
    
    test('Debe de realizar el reset', () => {
        const { result } = renderHook( () => useCounter( 100 ) );
        const { decrement, reset } = result.current;

        act(() => {
            decrement();
            reset();
        });

        expect( result.current.counter ).toBe( 100 );
    });
})