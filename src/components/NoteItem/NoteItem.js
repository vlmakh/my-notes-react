import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';

const startTodos = [
  {
    noteid: nanoid(4),
    note: [
      { id: nanoid(6), text: '6:00 Подъем', completed: false },
      { id: nanoid(6), text: '7:00 Разгон облаков', completed: false },
      { id: nanoid(6), text: '10:00-13:00 Подвиг', completed: false },
    ],
  },
];

function NoteItem({ noteid, note }) {
  const savedData = JSON.parse(localStorage.getItem('todos'));
  const [todos, setTodos] = useState(savedData ? savedData : startTodos);

  //   console.log(note);

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
    console.log(e.target.tagName);
    console.log(e.currentTarget.tagName);
  };

  const deleteTodo = todoId => {
    if (global.confirm('Вы действительно хотите удалить?')) {
      setTodos(todos.filter(todo => todo.id !== todoId));
    }
  };

  return (
    <Box
      width="340px"
      mr={3}
      mb={3}
      border="1px solid grey"
      borderRadius="8px"
      overflow="hidden"
      boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
    >
      <Box bg="tomato" p={2} textAlign="center" color="white">
        <h4>My To-do List</h4>
      </Box>

      <TodoAddNew onSubmit={addTodo} />

      <TodoList
        todos={todos}
        setTodos={setTodos}
        deleteTodo={deleteTodo}
        editTodo={editTodo}
        completeTodo={completeTodo}
      ></TodoList>
    </Box>
  );
}

export { NoteItem };
