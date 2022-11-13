import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';
import { MdDeleteForever } from 'react-icons/md';
import { FaSave, FaMarker } from 'react-icons/fa';
import { SaveBtn, EditBtn, DeleteBtn } from './NoteItem.styled';
import { NoteEditModal } from 'components/NoteEditModal/NoteEditModal';
// import { Component } from 'react';

function NoteItem({ note, editNote, deleteNote, editNoteName }) {
  const [todos, setTodos] = useState(note.todos);
  const [editOpen, setEditOpen] = useState(false);

  // useEffect(() => {
  //   editNote(noteId, todos);
  // }, [todos]);

  const handleSave = () => {
    editNote(note.noteid, todos);
  };

  const addTodo = data => {
    if (data.trim() !== '') {
      const newTodo = {
        id: nanoid(4),
        text: data,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      // todos = [newTodo, ...todos];
      handleSave();
    }
  };

  const editTodo = (todoId, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
    handleSave();
  };

  const completeTodo = todoId => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
    handleSave();
  };

  const deleteTodo = todoId => {
    if (global.confirm('Delete task?')) {
      setTodos(todos.filter(todo => todo.id !== todoId));
    }
    handleSave();
  };

  const toggleModal = () => {
    setEditOpen(!editOpen);
  };

  const handleEditName = newName => {
    toggleModal();
    editNoteName(note.noteid, newName);
  };

  return (
    <Box>
      <Box
        width="300px"
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
          px={2}
          textAlign="center"
          color="white"
          display="flex"
          justifyContent="space-between"
          position="relative"
        >
          <SaveBtn type="button" aria-label="Save note" onClick={handleSave}>
            <FaSave size="16" />
          </SaveBtn>
          <h4>{note.name}</h4>
          <EditBtn type="button" aria-label="Edit note" onClick={toggleModal}>
            <FaMarker />
          </EditBtn>
          <DeleteBtn type="button" onClick={() => deleteNote(note.noteid)}>
            <MdDeleteForever size="20" />
          </DeleteBtn>
          {editOpen && (
            <NoteEditModal
              saveNoteName={handleEditName}
              nameToUpdate={note.name}
            />
          )}
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
    </Box>
  );
}

// class NoteItem extends Component {
//   state = {
//     todos: [],
//   };

//   componentDidMount() {
//     this.setState({ todos: [...this.props.note.note] });
//   }

//   componentDidUpdate(_, prevState) {
//     if (this.state.todos !== prevState.todos) {
//       this.props.editNote(this.props.note.noteid, this.state.todos);
//     }
//   }

//   addTodo = data => {
//     if (data.trim() !== '') {
//       const newTodo = {
//         id: nanoid(4),
//         text: data,
//         completed: false,
//       };
//       this.setState(prevState => ({ todos: [newTodo, ...prevState.todos] }));
//     }
//   };

//   editTodo = (todoId, newText) => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo =>
//         todo.id === todoId ? { ...todo, text: newText } : todo
//       ),
//     }));
//   };

//   completeTodo = todoId => {
//     this.setState(prevState => ({
//       todos: prevState.todos.map(todo =>
//         todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
//       ),
//     }));
//   };

//   deleteTodo = todoId => {
//     if (global.confirm('Удалить задачу?')) {
//       this.setState(prevState => ({
//         todos: prevState.todos.filter(todo => todo.id !== todoId),
//       }));
//     }
//   };

//   render() {
//     const todos = this.state.todos;

//     return (
//       <Box>
//         <Box
//           width="340px"
//           mr={3}
//           mb={3}
//           border="1px solid grey"
//           borderRadius="8px"
//           overflow="hidden"
//           boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
//         >
//           <Box
//             bg="tomato"
//             py={2}
//             px={5}
//             textAlign="center"
//             color="white"
//             display="flex"
//             justifyContent="space-between"
//           >
//             <h4>Note {this.props.note.noteid}</h4>
//             <EditBtn type="button">
//               <FaMarker />
//             </EditBtn>
//             <DeleteBtn
//               type="button"
//               onClick={() => this.props.deleteNote(this.props.note.noteid)}
//             >
//               <MdDeleteForever size="20" />
//             </DeleteBtn>
//           </Box>

//           <TodoAddNew onSubmit={this.addTodo} />

//           <TodoList
//             todos={todos}
//             deleteTodo={this.deleteTodo}
//             editTodo={this.editTodo}
//             completeTodo={this.completeTodo}
//           ></TodoList>
//         </Box>
//       </Box>
//     );
//   }
// }

export { NoteItem };
