import { useMemo, useState } from 'react';
import { useCounter } from '../hooks';

const heavyStuff = ( iterationNumber = 100 ) => {
    for (let i = 0; i < iterationNumber; i++) {
        console.log('Ahí vamos...');
    }

    return `${ iterationNumber } iteraciones realizadas`;
}

export const MemoHook = () => {

    const { counter, increment } = useCounter( 5000 );
    const [ show, setShow ] = useState(true);

    const memorizedValue = useMemo( () => heavyStuff(counter), [counter] );  // memoriza el valor que retorna la función, lo va a memorizar o reprocesar si y solo si las dependencias cambian, en este caso cada vez que el counter cambie.

    return (
        <>

            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ memorizedValue }</h4>

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
