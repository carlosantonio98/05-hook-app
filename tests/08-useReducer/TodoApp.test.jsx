import { render, screen } from '@testing-library/react';
import { TodoApp } from '../../src/08-useReducer';
import { useTodo } from '../../src/hooks/useTodo';

// Si dentro de nuestro componente se ejecuta una función o customHook lo que debemos de hacer para simular la función es hacer un mock de esta, esta nos va a permitir simular los valores que retorna esta función, al declarar el mock es muy importante que se le asignen los valores por defecto dentro de cada componente de prueba, siempre y cuandp este lo necesite.
jest.mock('../../src/hooks/useTodo');

describe('Prueba en <TodoApp />', () => {

    useTodo.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false },
            { id: 2, description: 'Todo #2', done: true },
        ], 
        todosCount: 2, 
        pendingTodosCount: 1, 
        handleNewTodo: jest.fn(), 
        handleDeleteTodo: jest.fn(), 
        handleToggleTodo: jest.fn()
    });

    test('Debe de mostrar el componente correctamente', () => {

        render( <TodoApp /> );
        
        // Para hacer la prueba de que todo esta tal cual, podríamos hacer un snapshot, pero la que veremos aquí  es otra manera de poder hacer esa prueba sin hacer snapshot
        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();

    });

});