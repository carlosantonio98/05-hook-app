import { act, fireEvent, render, screen } from "@testing-library/react";
import { FormWithCustomHook } from "../../src/02-useEffect/FormWithCustomHook";
import { useForm } from "../../src/hooks/useForm";

jest.mock("../../src/hooks/useForm");

describe('Prueba en <FormWithCustomHook />', () => {

    const onInputChangeMock = jest.fn();
    const onResetFormMock = jest.fn();

    useForm.mockReturnValue({
        onInputChange: onInputChangeMock, 
        onResetForm: onResetFormMock, 
        username: 'Carlos', 
        email: 'carlos@test.com', 
        password: '123'
    });

    beforeEach(() => jest.clearAllMocks());

    test('Debe de mostrar el componente inicial', () => {

        useForm.mockReturnValue({
            onInputChange: onInputChangeMock, 
            onResetForm: onResetFormMock, 
            username: '', 
            email: '', 
            password: ''
        });
        
        render( <FormWithCustomHook /> );

        const inputUsername = screen.getByLabelText('username');
        const inputEmail = screen.getByLabelText('email');
        const inputPassword = screen.getByLabelText('password');

        expect( inputUsername.value ).toBeFalsy();
        expect( inputEmail.value ).toBeFalsy();
        expect( inputPassword.value ).toBeFalsy();

    });

    test('El input username de ejecutar en onChange', () => {

        render(<FormWithCustomHook/> );
        
        const inputUsername = screen.getByLabelText('username');
        fireEvent.change(inputUsername, { target: { value: 'Joan' }});

        expect(  onInputChangeMock ).toBeCalled();

    });
    
    test('El input email de ejecutar en onChange', () => {

        render(<FormWithCustomHook/> );
        
        const inputUsername = screen.getByLabelText('email');
        fireEvent.change(inputUsername, { target: { value: 'test@test.com' }});

        expect(  onInputChangeMock ).toBeCalled();

    });
    
    test('El input password de ejecutar en onChange', () => {

        render(<FormWithCustomHook/> );
        
        const inputUsername = screen.getByLabelText('password');
        fireEvent.change(inputUsername, { target: { value: '1234590' }});

        expect(  onInputChangeMock ).toBeCalled();

    });

    test('Debe de regresar el form a su estado inicial', () => {

        render( <FormWithCustomHook /> );
        
        const inputButton = screen.getByRole('button');
        fireEvent.click( inputButton );

        expect( onResetFormMock ).toBeCalled();

    });

});