import { TodoItem } from 'components/TodoItem/TodoItem';
import { ReorderListStyled } from './TodoList.styled';

export function TodoList({
  todos,
  setTodos,
  completeTodo,
  editTodo,
  deleteTodo,
}) {
  return (
    <ReorderListStyled axis="y" values={todos} onReorder={setTodos}>
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
    </ReorderListStyled>
  );
}
