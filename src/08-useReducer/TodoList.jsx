import { TodoItem } from './';
// import { PropTypes } from 'prop-types';

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {
        todos.map( todo => (
          /* TodoItem */
          <TodoItem 
            key={ todo.id } 
            todo={ todo } 
            onDeleteTodo={ onDeleteTodo } 
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


