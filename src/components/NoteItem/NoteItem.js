import { Box } from 'components/Box/Box';
import { useState } from 'react';
import { useRef, useEffect } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';
import { MdOutlineEdit, MdDeleteForever } from 'react-icons/md';
import { FaSave } from 'react-icons/fa';
import { SaveBtn, EditBtn, DeleteBtn } from './NoteItem.styled';
import { NoteEditModal } from 'components/NoteEditModal/NoteEditModal';
// import Badge from '@mui/material/Badge';

function NoteItem({ note, editNote, deleteNote, editNoteName }) {
  const [todos, setTodos] = useState(note.todos);
  const [editOpen, setEditOpen] = useState(false);
  const saveBtn = useRef();

  // const noteId = useRef(note.noteid)
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      saveBtn.current.disabled = true;
      saveBtn.current.classList.remove('active');
      return;
    }

    saveBtn.current.disabled = false;
    saveBtn.current.classList.add('active');
    // editNote(noteId, todos);
  }, [todos]);

  const handleSave = event => {
    editNote(note.noteid, todos);
    event.currentTarget.disabled = true;
    saveBtn.current.classList.remove('active');
  };

  const addTodo = data => {
    if (data.trim() !== '') {
      const newTodo = {
        id: nanoid(4),
        text: data,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
      // handleSave();
      // note.todos = [newTodo, ...note.todos];
      // editNote(note.noteid, note.todos);
    }
  };

  const editTodo = (todoId, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
    // handleSave();
    // note.todos = note.todos.map(todo =>
    //   todo.id === todoId ? { ...todo, text: newText } : todo
    // );
    // editNote(note.noteid, note.todos);
  };

  const completeTodo = todoId => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
    // handleSave();
    // note.todos = note.todos.map(todo =>
    //   todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
    // );
    // editNote(note.noteid, note.todos);
  };

  const deleteTodo = todoId => {
    if (global.confirm('Delete task?')) {
      setTodos(todos.filter(todo => todo.id !== todoId));
    }
    // handleSave();
    // if (global.confirm('Delete task?')) {
    //   note.todos = note.todos.filter(todo => todo.id !== todoId);
    // }
    // editNote(note.noteid, note.todos);
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
        backgroundColor="white"
        width="300px"
        mr={3}
        mb={3}
        border="1px solid grey"
        borderRadius="8px"
        overflow="hidden"
        boxShadow="0px 4px 8px rgba(0, 0, 0, 0.6)"
      >
        <Box
          bg={note.color}
          py={2}
          px={2}
          textAlign="center"
          color="white"
          display="flex"
          justifyContent="space-between"
          position="relative"
        >
          <SaveBtn
            type="button"
            aria-label="Save note"
            // disabled={true}
            ref={saveBtn}
            onClick={handleSave}
          >
            <FaSave size="16" />
          </SaveBtn>

          {/* <Badge badgeContent={0} color="secondary" showZero /> */}
          <h4>{note.name}</h4>

          <EditBtn type="button" aria-label="Edit note" onClick={toggleModal}>
            <MdOutlineEdit size="20" />
          </EditBtn>
          <DeleteBtn type="button" onClick={() => deleteNote(note.noteid)}>
            <MdDeleteForever size="20" />
          </DeleteBtn>
          {editOpen && (
            <NoteEditModal
              saveNoteName={handleEditName}
              nameToUpdate={note.name}
              bgColor={note.color}
              cancelEdit={toggleModal}
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

export { NoteItem };
