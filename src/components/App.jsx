import { Box, BoxMain } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { AddNew } from 'components/AddNew/AddNew';

const startTodos = [
  { id: nanoid(4), text: '6:00 Подъем', completed: false },
  { id: nanoid(4), text: '7:00 Разгон облаков', completed: false },
  { id: nanoid(4), text: '10:00-13:00 Подвиг', completed: false },
];

function App() {
  const savedData = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedData ? savedData : startTodos);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = data => {
    const newTodo = {
      id: nanoid(4),
      text: data,
      completed: false,
    };

    if (data.trim() !== '') {
      setTodos([newTodo, ...todos]);
    }
  };

  const editTodo = (todoId, newText) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
  };

  const completeTodo = (e, todoId) => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
    console.log(e.target.tagName)
    console.log(e.currentTarget.tagName)
  };

  const deleteTodo = todoId => {
    if (global.confirm('Вы действительно хотите удалить?')) {
      setTodos(todos.filter(todo => todo.id !== todoId));
    }
  };

  return (
    <BoxMain>
      <Box bg="tomato" p={2} textAlign="center" color="white">
        <h4>My To-do List</h4>
      </Box>

      <AddNew onSubmit={addTodo} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
      ></TodoList>
    </BoxMain>
  );
}

export { App };
