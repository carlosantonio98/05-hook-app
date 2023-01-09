import { render, screen, fireEvent } from '@testing-library/react';
import { CounterWithCustormHook } from '../../src/01-useState/CounterWithCustormHook';
import { useCounter } from '../../src/hooks/useCounter';

jest.mock('../../src/hooks/useCounter');

describe('Prueba en <CounterWithCustomHook/>', () => {

    const mockIncrement = jest.fn();
    const mockDecrement = jest.fn();
    const mockReset = jest.fn();

    beforeEach( () => {
        jest.clearAllMocks();
    });

    test('Debe de mostrar los datos iniciales', () => {
        useCounter.mockReturnValue({
            counter: 10,
            increment: mockIncrement,
            reset: mockReset,
            decrement: mockDecrement
        });

        render( <CounterWithCustormHook /> );

        expect( screen.getByRole("heading").innerHTML ).toBe('Counter with Hook: 10');

    });

    test('Debe de llamar a la función incrementar', () => {

        useCounter.mockReturnValue({
            counter: 1,
            increment: mockIncrement
        });

        render( <CounterWithCustormHook /> );

        const btnIncrement = screen.getByLabelText( 'btnIncrement' );
        fireEvent.click( btnIncrement );

        expect( mockIncrement ).toBeCalled();

    });

    test('Debe de llamar a la función disminuir', () => {

        useCounter.mockReturnValue({
            counter: 0,
            decrement: mockDecrement
        });

        render( <CounterWithCustormHook /> );

        const btnDecrement = screen.getByLabelText( 'btnDecrement' );
        fireEvent.click( btnDecrement );

        expect( mockDecrement ).toBeCalled();

    });

    test('Debe de llamar a la función resetear', () => {

        useCounter.mockReturnValue({
            counter: 10,
            reset: mockReset
        });

        render( <CounterWithCustormHook /> );

        const btnReset = screen.getByLabelText( 'btnReset' );
        fireEvent.click( btnReset );

        expect( mockReset ).toBeCalled();

    });

});