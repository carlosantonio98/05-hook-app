import { TodoItem } from './';
// import { PropTypes } from 'prop-types';

export const TodoList = ({ todos = [] }) => {
  return (
    <ul className="list-group">
      {
        todos.map( todo => (
          /* TodoItem */
          <TodoItem key={ todo.id } todo={ todo } />
          /* TodoItem */
        ))
      }
    </ul>
  )
}

/* TodoList.propTypes = {
  todo: PropTypes.array.isRequired
} */


