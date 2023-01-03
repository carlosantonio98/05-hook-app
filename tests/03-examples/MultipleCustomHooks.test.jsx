import { fireEvent, render, screen } from '@testing-library/react';
import { MultipleCustomHooks } from '../../src/03-examples';
import { useFetch } from '../../src/hooks/useFetch';
import { useCounter } from '../../src/hooks/useCounter';

// Al hacer un mock tenemos que inicializar su valor en todos los lados que se necesite, en este caso nosotros le retornamos sus datos esperados en todos los test ya que en todos estamos renderizando el MultipleCustomHooks y este internamente usa el useFetch y el useCounter
jest.mock('../../src/hooks/useFetch');
jest.mock('../../src/hooks/useCounter');

describe('Prueba en <MultipleCustomHooks />', () => {

    // Esto lo que esta haciendo es que en todas la pruebas va ha tener este mock del counter
    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    // si queremos asegurarnos de que cada una de nuestra funciones estan limpias o reseteadas en su estado inicial usamos una parte del ciclo de vida de las pruebas que es el beforeEach, tenemos el beforeAll, beforeEach, tenemos el afterAll, el afterEach, el beforeEach es antes de cada una de las pruebas, antes de cada prueba, el beforeAll es antes de todas las pruebas.

    // El beforeEach no es mas que otra función que recibe un callback con todo lo que nosotros queramos hacer, en este caso le decimos que limpie cada una de las pruebas con el jest.clearAllMocks().
    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar el componente por defecto', () => {

        // Lo llamamos cada queramos simular el valor o el retorno de datos de una funcion simulada en este caso al llamar al componente MultiplecustomHook nosotros necesitamos simular los valores que devuelve la funcion useFetch que se ejecuta dentro del MultiplecustomHook cuando se crea, practicamente aqui lo que estamos haciendo es simular exactamente que es lo que se regresa del useFetch, al no hacer esto por defecto retornara undefined y marcara error porque no se puede destructurar un objeto que esta undefined
        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: null
        });

        render( <MultipleCustomHooks />);
        // screen tiene la información tal cual esta en este momento

        // para hacer esta prueba facil lo podriamos hacer con un snapshot, pero para expander más nuestro conocimiento esta es otra manera de hacer este tipo de prueba

        expect( screen.getByText( 'Loading...' ) );
        expect( screen.getByText( 'BreakingBad Quotes' ) );

        const nextButton = screen.getByRole('button', { name: 'Next quote' }); // Para hacer mas precisa la búsqueda de un botón al momento de estar haciendo pruebas tenemos que poner el name, aria-label o text-id para poder identificarlo, hay muchas maneras de referenciar un botón en especifico.

        expect( nextButton.disabled ).toBeTruthy();
    });

    test('Debe de mostrar un quote', () => {

        // El mockReturnValue acepta un valor que se devolverá cada vez que se llame a la función simulada.
        useFetch.mockReturnValue({
            data: [{ author: 'Carlos', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> )
        expect( screen.getByText('Hola mundo') ).toBeTruthy();
        expect( screen.getByText('Carlos') ).toBeTruthy();

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        expect( nextButton.disabled ).toBeFalsy();

    });

    test('Debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: [{ author: 'Carlos', quote: 'Hola mundo' }],
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks /> );

        const nextButton = screen.getByRole('button', { name: 'Next quote' });
        fireEvent.click( nextButton );

       expect( mockIncrement ).toHaveBeenCalled();

    });

})