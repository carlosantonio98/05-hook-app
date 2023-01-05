import { render, screen, fireEvent } from '@testing-library/react';
import { LoginPage } from '../../src/09-useContext';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Pruebas en <LoginPage />', () => {

    const user = {
        id: 234,
        name: 'JoanArturo',
        email: 'joan.arturo_99@hotmail.com'
    }


    test('Debe de mostrar el componente sin el usuario', () => {

        render( 
            <UserContext.Provider value={{ user: null }}>
                <LoginPage />
            </UserContext.Provider>
        );
        //screen.debug();
        
        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toBe( 'null' );
        
    });
    
    test('Debe de llamara el setUser cuando se hace click en el boton', () => {

        const setUserMock = jest.fn();

        render( 
            <UserContext.Provider value={{ user: null, setUser: setUserMock }}>
                <LoginPage />
            </UserContext.Provider>
        );
        
        screen.debug();

        const btnLogin = screen.getByRole( 'button' );
        fireEvent.click( btnLogin );

        expect( setUserMock ).toHaveBeenCalledWith( user );

    });

});