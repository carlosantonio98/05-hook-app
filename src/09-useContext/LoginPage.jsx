import { useContext } from 'react'
import { UserContext } from './context/UserContext';

export const LoginPage = () => {

    const { user, setUser } = useContext( UserContext );

    return (
        <>
            <h1>Login page</h1>
            <hr />

            <pre aria-label="pre">
                { JSON.stringify( user, null, 3 ) }
            </pre>

            <button
                className='btn btn-primary'
                onClick={ () => setUser({
                    id: 234,
                    name: 'JoanArturo',
                    email: 'joan.arturo_99@hotmail.com'
                }) }
            >
                Establecer usuario
            </button>
        </>
    )
}