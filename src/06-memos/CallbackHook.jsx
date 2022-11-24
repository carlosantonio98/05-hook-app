import { useCallback, useEffect, useState } from 'react';
import { ShowIncrement } from './ShowIncrement';

export const CallbackHook = () => {

    const [counter, setCounter] = useState( 0 );

    // useCallback devolverá una versión memorizada de la  funcion(callback) que solo cambia si una de las entradas ha cambiado. 

    // uso comun
    const incrementFather = useCallback(() => {  // funcion memorizada
        setCounter( (value) => value + 1 );
    }, []);  // va a cambiar solo una vez, cuando este sea montado


    // Si nosotros mandaramos a llamar la función incrementFather y no tuvieramos el useMemo, para este efecto esta función siempre seria diferente y cada vez que cambie el estado se haria este efecto y causaria un ciclo infinito, esto sucede porque estas funciones a como los objetos siempre apuntan a un espacio en memoria diferente.

    // otro uso: cuando la funcion cambie que dispare un efecto
    useEffect(() => {
        incrementFather()  // se va a disparar la funcion cuando cambie el padre o la función
    }, [incrementFather]);

    /* const incrementFather = () => {
        setCounter( counter + 1 );
    } */
  
    return (
        <>
            <h1>useCallback Hook: { counter }</h1>
            <hr />

            <ShowIncrement increment={ incrementFather } />
        </>
    );
}
