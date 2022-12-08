import { useReducer } from 'react'
import { todoReducer } from './todoReducer';

const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la piedra del alma',
        done: false,
    },
];

export const TodoApp = () => {


    // const [ state, dispatch ] = useReducer( todoReducer, initialState );
    const [ todos, dispatch] = useReducer( todoReducer, initialState );
    // la parte del state usualmente se le coloca el nombre de lo que devuelve en este caso en nuestros todos
    // la parte del dispatch usualmente se llama así cuando solo tenemos un reducer, si nosotros tenemos más de un reducer en el mismo functional component nosotros le podemos poner dispatchTodoAction o dispatchTodo para indicar de que esto es la función que despacha acciones hacia ese reducer en particular, pero si solo tenemos un reducer usualmente le podemos dejar dispatch porque sabe que solo hace referencia a este de aquí

    return (
        <>
            <h1>Todo app</h1>
            <hr />

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </>
    )
}
