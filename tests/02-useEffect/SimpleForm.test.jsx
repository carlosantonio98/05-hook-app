import { render, screen, fireEvent } from '@testing-library/react';
import { SimpleForm } from '../../src/02-useEffect/SimpleForm';

describe('Prueba en <SimpleForm />', () => {

    const username = 'carlos';
    const email = 'test@test.com';

    test('Debe de mostrar el componente inicial', () => { 
        render( <SimpleForm /> );
        
        const inputUsername = screen.getByLabelText('username');
        const inputEmail = screen.getByLabelText('email');

        expect(  inputUsername.value ).toBe( 'strider' );
        expect(  inputEmail.value ).toBe( 'pedro@google.com' );
    });

    test('El input username debe ejecutar el onChange', () => { 
        render( <SimpleForm /> );
        
        const inputUsername = screen.getByLabelText('username');
        fireEvent.change(inputUsername, { target: { value: username, name: 'username' }});

        expect(  inputUsername.value ).toBe(username);
    });

    test('El input email debe ejecutar el onChange', () => { 
        render( <SimpleForm /> );
        
        const inputEmail = screen.getByLabelText('email');
        fireEvent.change(inputEmail, { target: { value: email, name: 'email' }});

        expect(  inputEmail.value ).toBe(email);
    });

});