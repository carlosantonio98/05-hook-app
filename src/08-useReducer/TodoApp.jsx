import { useReducer, useEffect } from 'react';
import { TodoList, TodoAdd, todoReducer } from './';

const initialState = [
    /* {
        id: new Date().getTime(),
        description: 'Recolectar la piedra del alma',
        done: false,
    } */
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {


    // const [ state, dispatch ] = useReducer( todoReducer, initialState );
    const [ todos, dispatch] = useReducer( todoReducer, initialState, init );
    // la parte del state usualmente se le coloca el nombre de lo que devuelve en este caso en nuestros todos
    // la parte del dispatch usualmente se llama así cuando solo tenemos un reducer, si nosotros tenemos más de un reducer en el mismo functional component nosotros le podemos poner dispatchTodoAction o dispatchTodo para indicar de que esto es la función que despacha acciones hacia ese reducer en particular, pero si solo tenemos un reducer usualmente le podemos dejar dispatch porque sabe que solo hace referencia a este de aquí
    // inicializamos nuestro estate con los todos que previamente existian en el localstorage para no perderlos
    // el init es la función que inicializa nuestro reducer


    // Hacemos que se dispare un evento secundario cuando los todos cambien
    useEffect(() => {
        // En el localstorage solo vamos a poder grabar strings, si necesitamos guardar objetos u arreglos lo tenemos que convertir primero a string, para que de esa manera el navegador pueda almacenarlo en el localstorage. Cuando nosotros guardamos un objeto como cadena automaticamente el navegador lo serializa para que nosotros podamos leerlo desde el localstorage.
        localStorage.setItem('todos', JSON.stringify( todos ));

    }, [todos])
    

    const handleNewTodo = ( todo ) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo
        }

        dispatch( action );
    }

    const handleDeleteTodo = ( id ) => {
        dispatch({
            type: '[TODO] Remove Todo',
            payload: id
        });
    }

    return (
        <>
            <h1>TodoApp: 10 ,<small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                    />
                    {/* TodoList */}
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    
                    {/* TodoAdd */}
                    <TodoAdd 
                        onNewTodo={ handleNewTodo } 
                    />
                    {/* TodoAdd */}
                </div>
            </div>

        </>
    )
}
