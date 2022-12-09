import { useReducer } from 'react';
import { TodoList, TodoAdd, todoReducer } from './';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del tiempo',
        done: false,
    },
];

export const TodoApp = () => {


    // const [ state, dispatch ] = useReducer( todoReducer, initialState );
    const [ todos, dispatch] = useReducer( todoReducer, initialState );
    // la parte del state usualmente se le coloca el nombre de lo que devuelve en este caso en nuestros todos
    // la parte del dispatch usualmente se llama así cuando solo tenemos un reducer, si nosotros tenemos más de un reducer en el mismo functional component nosotros le podemos poner dispatchTodoAction o dispatchTodo para indicar de que esto es la función que despacha acciones hacia ese reducer en particular, pero si solo tenemos un reducer usualmente le podemos dejar dispatch porque sabe que solo hace referencia a este de aquí

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );

        console.log({ todo });
    }

    return (
        <>
            <h1>TodoApp: 10 ,<small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    <TodoList todos={ todos } />
                    {/* TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    {/* TodoAdd */}
                    <TodoAdd onNewTodo={ handleNewTodo } />
                    {/* TodoAdd */}
                </div>
            </div>

        </>
    )
}
