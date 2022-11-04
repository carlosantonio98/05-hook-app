import { useState } from "react"

export const CounterApp = () => {

    // const [counter, setCounter] = useState(10);
    /* const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    }); */
    const [state, setCounter] = useState({
        counter1: 10,
        counter2: 20,
        counter3: 30,
    });

    const { counter1, counter2, counter3 } = state;

    return (
        <>
            {/* <h1>Counter: { counter }</h1> */}
            <h1>Counter: { counter1 }</h1>
            <h1>Counter: { counter2 }</h1>
            <h1>Counter: { counter3 }</h1>

            <hr />

            <button 
                className="btn btn-primary" 
                onClick={ 
                    () => setCounter({
                        // counter1:counter1 + 1, counter2, counter3
                        ...state,  // Usamos el spread para clonar todas las propiedades 
                        counter1: counter1 + 1 // sobreescribimos el counter1 por este nuevo valor
                    }) }
                >+1</button>
        </>
    )
}
