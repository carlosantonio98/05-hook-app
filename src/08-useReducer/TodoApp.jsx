import { TodoList, TodoAdd } from './';
import { useTodo } from '../hooks/useTodo';

export const TodoApp = () => {

    // useTodo
    // todos, handleNewTodo, handleDeleteTodo, handleToggleTodo
    const { todos, todosCount, pendingTodosCount, handleNewTodo, handleDeleteTodo, handleToggleTodo } = useTodo();

    return (
        <>
            <h1>TodoApp: { todosCount } ,<small>pendientes: { pendingTodosCount }</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">

                    {/* TodoList */}
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo } 
                        onToggleTodo={ handleToggleTodo }
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
