// import { memo } from 'react';
import React from 'react';

//export const Small = memo(({ value }) => {

export const Small = React.memo(({ value }) => {  // Manera mas comun de encontrar un memo

    console.log('Se esta dibujando');

    return (
        <small>{ value }</small>
    )
})
