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
            todo={todo}
            completeTodo={completeTodo}
            editTodo={editTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ReorderListStyled>
  );
}
