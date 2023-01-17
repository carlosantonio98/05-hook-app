import React from 'react'
import { useForm } from '../hooks/useForm';

export const FormWithCustomHook = () => {

    const { formState, onInputChange, onResetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: ''
    });

    // const { username, email, password } = formState;


    return (
        <>
            <h1>Formulario simple</h1>
            <hr />

            <input 
                type="text"
                className='form-control'
                placeholder='Username'
                name='username'
                value={ username }
                onChange={ onInputChange }
                aria-label="username"
            />

            <input 
                type="email"
                className='form-control mt-2'
                placeholder='carlos.alvarez9805@gmail.com'
                name='email'
                value={ email }
                onChange={ onInputChange }
                aria-label="email"
            />

            <input 
                type="password"
                className='form-control mt-2'
                placeholder='Contraseña'
                name='password'
                value={ password }
                onChange={ onInputChange }
                aria-label="password"
            />

            <button onClick={ onResetForm }  className='btn btn-primary mt-2'>Borrar</button>

        </>
    );
}