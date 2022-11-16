import { useCounter, useFetch } from '../hooks';
import { LoadingQuote, Quote } from './';

export const MultipleCustomHooks = () => {
    const { counter, increment }        = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);

    // Si intentamos destructurar un false no dara error, ya que author y quote tendran como valor undefined.
    /*
        const { a, b } = false;   

        console.log({ a, b }); // { undefined, undefined }
    */
    // No podemos desestructurar algo nulo o undefined, la unica manera de desestructurar un nulo o indefinded es haciendo una doble negacion de estos,  si negamos !null esto da true, es decir lo opuesto de vacio es algo que tiene valor y si lo volvemos a negar !!null esto nos dara un false, lo mismo pasa con el undefined, en pocas palabras el !!data es como una condicional, si !!data es true va a ejecutar la siguiente linea y va a regresarnos el siguiente valor que es la data en la posicion 0 "data[0]"
    const { author, quote } = !!data && data[0];

    // console.log({ data, isLoading, hasError });

    return (
        <>
            <h1>BreakingBad Quotes</h1>
            <hr />

            {/* Es recomendable usar esto si solo son 3 o 4 lineas de código */}
            {
                isLoading
                    ? <LoadingQuote />  // Hay que priorizar trabajar con el principio de responsabilidad unica
                    : <Quote quote={ quote } author={ author } />
            }
            
            <button className="btn btn-primary"
                    onClick={ () => increment() }
                    disabled={ isLoading }>
                Next quote
            </button>
            
        </>
    );
}
