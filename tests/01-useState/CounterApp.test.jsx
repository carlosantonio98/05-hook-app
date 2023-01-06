import { render, screen, fireEvent } from "@testing-library/react";
import { CounterApp } from "../../src/01-useState/CounterApp";

describe('Prueba en <CounterApp />', () => {

    test('Debe de mostrar el estado inicial de los counters', () => {

        render( <CounterApp /> );
        // screen.debug();
        const counterOne = screen.getByLabelText( 'counter-one' );
        const counterTwo = screen.getByLabelText( 'counter-two' );
        const counterThree = screen.getByLabelText( 'counter-three' );

        expect( counterOne.innerHTML ).toBe( 'Counter 1: 10' );
        expect( counterTwo.innerHTML ).toBe( 'Counter 2: 20' );
        expect( counterThree.innerHTML ).toBe( 'Counter 3: 30' );

    });

    test('Debe de incrementar el contador 1', () => {

        render( <CounterApp /> );
        const counterOne = screen.getByLabelText( 'counter-one' );

        const btnElement = screen.getByRole( 'button' );
        fireEvent.click( btnElement );

        expect( counterOne.innerHTML ).toBe( 'Counter 1: 11' );

    })

});