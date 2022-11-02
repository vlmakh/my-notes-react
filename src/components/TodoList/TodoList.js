import css from './TodoList.module.css';
import { TodoItem } from 'components/TodoItem/TodoItem';

export function TodoList({ todos, completeTodo, editTodo, deleteTodo }) {
  return (
    <ul className={css.todoList}>
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeTodo={completeTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
