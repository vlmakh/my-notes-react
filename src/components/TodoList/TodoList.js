import { Reorder } from 'framer-motion';
import css from './TodoList.module.css';
import { TodoItem } from 'components/TodoItem/TodoItem';

export function TodoList({
  todos,
  setTodos,
  completeTodo,
  editTodo,
  deleteTodo,
}) {
  return (
    <Reorder.Group
      axis="y"
      values={todos}
      onReorder={setTodos}
      className={css.todoList}
    >
      {todos.map(todo => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            todo={todo}
            completed={todo.completed}
            completeTodo={completeTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </Reorder.Group>
  );
}
