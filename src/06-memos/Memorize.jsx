import { useState } from 'react';
import { useCounter } from '../hooks';
import { Small } from './Small';

export const Memorize = () => {

    const { counter, increment } = useCounter();
    const [ show, setShow ] = useState(true);

    return (
        <>

            <h1>Counter: <Small value={ counter } /></h1>
            <hr />

            <button
                className="btn btn-primary"
                onClick={ () => increment() }
            >
                +1
            </button>

            <button
                className="btn btn-outline-primary me-2"
                onClick={ () => setShow( !show ) }
            >
                Show/Hide { JSON.stringify(show) } {/* Usamos un stringify para mostrar un valor boleano, hay que recordar que un valor boleano no lo podemos mostrar en pantalla a menos de que lo mostremos con un stringify */}
            </button>

        </>
    )
}
