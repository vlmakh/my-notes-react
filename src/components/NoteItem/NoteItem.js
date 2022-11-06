import { Box } from 'components/Box/Box';
// import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';
import { MdDeleteForever } from 'react-icons/md';
import { FaMarker } from 'react-icons/fa';
import { EditBtn, DeleteBtn } from './NoteItem.styled';
import { Component } from 'react';

// function NoteItem({ note, editNote, deleteNote }) {
//   const [todos, setTodos] = useState(note.note);

//   // useEffect(() => {
//   //   editNote(note.noteid, todos);
//   // }, [todos]);

//   const addTodo = data => {
//     if (data.trim() !== '') {
//       const newTodo = {
//         id: nanoid(4),
//         text: data,
//         completed: false,
//       };
//       setTodos([newTodo, ...todos]);
//       // console.log(todos);
//       editNote(note.noteid, todos);
//     }
//   };

//   const editTodo = (todoId, newText) => {
//     setTodos(
//       todos.map(todo =>
//         todo.id === todoId ? { ...todo, text: newText } : todo
//       )
//     );
//     // console.log(todos);
//     editNote(note.noteid, todos);
//   };

//   const completeTodo = todoId => {
//     setTodos(todos =>
//       todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       )
//     );
//     // console.log(todos);
//     editNote(note.noteid, todos);
//   };

//   const deleteTodo = todoId => {
//     if (global.confirm('Delete task?')) {
//       setTodos(todos.filter(todo => todo.id !== todoId));
//     }
//     // console.log(todos);
//     editNote(note.noteid, todos);
//   };

//   return (
//     <Box>
//       <Box
//         width="340px"
//         mr={3}
//         mb={3}
//         border="1px solid grey"
//         borderRadius="8px"
//         overflow="hidden"
//         boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
//       >
//         <Box
//           bg="tomato"
//           py={2}
//           px={5}
//           textAlign="center"
//           color="white"
//           display="flex"
//           justifyContent="space-between"
//         >
//           <h4>Note {note.noteid}</h4>
//           <EditBtn type="button">
//             <FaMarker />
//           </EditBtn>
//           <DeleteBtn type="button" onClick={() => deleteNote(note.noteid)}>
//             <MdDeleteForever size="20" />
//           </DeleteBtn>
//         </Box>

//         <TodoAddNew onSubmit={addTodo} />

//         <TodoList
//           todos={todos}
//           setTodos={setTodos}
//           deleteTodo={deleteTodo}
//           editTodo={editTodo}
//           completeTodo={completeTodo}
//         ></TodoList>
//       </Box>
//     </Box>
//   );
// }

class NoteItem extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({ todos: [...this.props.note.note] });
  }

  componentDidUpdate(_, prevState) {
    if (this.state.todos !== prevState.todos) {
      this.props.editNote(this.props.note.noteid, this.state.todos);
    }
    console.log('update');
  }

  addTodo = data => {
    if (data.trim() !== '') {
      const newTodo = {
        id: nanoid(4),
        text: data,
        completed: false,
      };
      this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
    }
  };

  editTodo = (todoId, newText) => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      ),
    }));
  };

  completeTodo = todoId => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      ),
    }));
  };

  deleteTodo = todoId => {
    if (global.confirm('Удалить задачу?')) {
      this.setState(prevState => ({
        todos: prevState.todos.filter(todo => todo.id !== todoId),
      }));
    }
  };

  render() {
    const todos = this.state.todos;

    return (
      <Box>
        <Box
          width="340px"
          mr={3}
          mb={3}
          border="1px solid grey"
          borderRadius="8px"
          overflow="hidden"
          boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
        >
          <Box
            bg="tomato"
            py={2}
            px={5}
            textAlign="center"
            color="white"
            display="flex"
            justifyContent="space-between"
          >
            <h4>Note {this.props.note.noteid}</h4>
            <EditBtn type="button">
              <FaMarker />
            </EditBtn>
            <DeleteBtn
              type="button"
              onClick={() => this.props.deleteNote(this.props.note.noteid)}
            >
              <MdDeleteForever size="20" />
            </DeleteBtn>
          </Box>

          <TodoAddNew onSubmit={this.addTodo} />

          <TodoList
            todos={todos}
            // setTodos={this.setTodos}
            deleteTodo={this.deleteTodo}
            editTodo={this.editTodo}
            completeTodo={this.completeTodo}
          ></TodoList>
        </Box>
      </Box>
    );
  }
}

export { NoteItem };
