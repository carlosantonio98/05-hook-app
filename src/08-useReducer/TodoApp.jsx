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
        description: 'Recolectar la piedra del tiempo',
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
            <h1>TodoApp: 10 ,<small>pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <ul className="list-group">
                       {
                            todos.map( todo => (
                                <li key={ todo.id } className="list-group-item d-flex justify-content-between">
                                    <span className="align-self-center">Item 1</span>
                                    <button className="btn btn-danger">Borrar</button>
                                </li>
                            ))

                       }
                    </ul>
                </div>

                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <form>
                        <input 
                            type="text" 
                            placeholder="¿Qué hay que hacer?"
                            className="form-control"
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1"
                        >
                            Agregar
                        </button>
                    </form>
                </div>
            </div>

        </>
    )
}
