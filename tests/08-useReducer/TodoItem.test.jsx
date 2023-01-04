import { render, screen } from "@testing-library/react";
import { TodoItem } from "../../src/08-useReducer/TodoItem";

describe('Pruebas en <TodoItem />', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    // Hacemos esto para limpiar las funciones antes de cada test
    beforeEach( () =>  jest.clearAllMocks() );

    test('Debe de mostrar el Todo pendiente de completar', () => {

        render( 
            <TodoItem
                todo={ todo }
                onToggleTodo={ onToggleTodoMock }
                onDeleteTodo={ onDeleteTodoMock }
            /> 
        );

        const liElement = screen.getByRole('listitem');
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');
    
        // Los elementos de tipo span no lo podemos buscar con el getByRole, al momento de hacer pruebas, para poder identificar a un span en especifico necesitamos agregarle al span un aria-label="cualquier nombre" y desde las pruebas buscarlo con un scree.getByLabelText('el nombre que le pusimos al aria-label del span') de esta manera podremos identificar al span desde las pruebas.
        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center');
        expect( spanElement.className ).not.toContain('text-decoration-line-through');


    });

});