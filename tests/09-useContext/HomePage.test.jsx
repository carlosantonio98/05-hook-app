import { render, screen } from '@testing-library/react';
import { HomePage } from '../../src/09-useContext/HomePage';
import { UserContext } from '../../src/09-useContext/context/UserContext';

describe('Prueba en <HomePage />', () => {

    const user = {
        id: 1,
        name: 'Carlos'
    }

    test('Debe de mostrar el componente sin el usuario', () => { 

        // Para que funcione conrrectamente tenemos que establecer el valor del contexto y basado en el contexto el homePage debe de lucir de cierta manera
        render( 
            <UserContext.Provider value={{ user: null }}>
                <HomePage /> 
            </UserContext.Provider>
        );
        //screen.debug();
        
        const preTag = screen.getByLabelText('pre');
        expect( preTag.innerHTML ).toBe( 'null' );
    });

    test('Debe de mostrar el componente con el usuario', () => {

        render(
            <UserContext.Provider value={{ user }}>
                <HomePage />
            </UserContext.Provider>
        );
        // screen.debug();

        const preTag = screen.getByLabelText( 'pre' );
        expect( preTag.innerHTML ).toContain( user.name );
        expect( preTag.innerHTML ).toContain( user.id.toString() );

    });

});