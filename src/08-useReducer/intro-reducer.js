

const initialState = [{
    id: 1,
    todo: 'Recolectar la marihuana',
    done: false,
}];

const todoReducer = ( state = initialState, action = {} ) => {

    // la acción es quien va ha decirle al todoReducer como quiero que cambie el estado
    if ( action.type === '[TODO] add todo' ) {
        return [ ...state, action.payload ];
    }

    // una de las condiciones del reducer es que siempre debe de retornar un estado
    return state;
}

let todos = todoReducer();

// es mala practica mutar el estado de esta manera, de echo esto no se deberia de hacer ya que si modificamos el estado así cambiaria la variable mas sin embargo no se re-renderizaria el componente nuevamente, la manera correcta de cambiar el estado o modificar nuestro reducer seria mandar una accion al reducer que le diga como modificarse
/*
todo.push({
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
});
*/

const newTodo = {
    id: 2,
    todo: 'Recolectar la piedra del poder',
    done: false,
}

const addTodoActions = {
    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer( todos, addTodoActions );

console.log({ state: todos });