import { List } from './TodoList.styled';
import { TodoItem } from 'components/TodoItem/TodoItem';

export function TodoList({ todos, completeTodo, editTodo, deleteTodo }) {
  return (
    <List>
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
    </List>
  );
}
