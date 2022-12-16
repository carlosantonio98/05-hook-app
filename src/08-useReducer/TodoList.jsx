import { TodoItem } from './';
// import { PropTypes } from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo, onToggleTodo }) => {
  return (
    <ul className="list-group">
      {
        todos.map( todo => (
          /* TodoItem */
          <TodoItem 
            key={ todo.id } 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodo }
            onToggleTodo={ onToggleTodo } 
          />
          /* TodoItem */
        ))
      }
    </ul>
  )
}

/* TodoList.propTypes = {
  todo: PropTypes.array.isRequired
} */


