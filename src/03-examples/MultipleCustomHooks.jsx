import { useFetch } from '../hooks/useFetch';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {
    const { counter, increment }        = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`https://www.breakingbadapi.com/api/quotes/${ counter }`);
    console.log(counter);

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
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer"> { author }</footer>
                        </blockquote>
                    )
            }
            
            <button className="btn btn-primary"
                    onClick={ () => increment() }
                    disabled={ isLoading }>
                Next quote
            </button>
            
        </>
    );
}
