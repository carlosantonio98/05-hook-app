import { Hijo } from './Hijo'
import { useCallback, useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback(  // memorizamos la función para que no cambie cada que el estado del componente tenga otro valor
        ( num ) => {
            setValor( (counter) => counter + num );
        },
        [] // indicamos que solo se creara una sola vez
    );

    // Memorizamos esto porque tanto los objetos como las funciones siempre apuntan a un espacio en memoria diferente cada vez que se redibujan.


    return (
        <div>
            <h1>Padre</h1>
            <p> Total: { valor } </p>

            <hr />

            {
                numeros.map( n => (
                    <Hijo 
                        key={ n }
                        numero={ n }
                        incrementar={ incrementar }
                    />
                ))
            }
            {/* <Hijo /> */}
        </div>
    )
}
