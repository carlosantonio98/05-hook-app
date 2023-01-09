import React from 'react'
import { useCounter } from '../hooks/useCounter'

export const CounterWithCustormHook = () => {

    const { counter, increment,  decrement, reset } = useCounter();

    return (
        <>
            <h1>Counter with Hook: { counter }</h1>
            <hr />

            <button aria-label='btnIncrement' onClick={ () => increment(2) } className='btn btn-primary'>+1</button>
            <button aria-label='btnReset' onClick={ reset } className='btn btn-primary'>Reset</button>
            <button aria-label='btnDecrement' onClick={ () => decrement(2) } className='btn btn-primary'>-1</button>
        </>
    );
}
