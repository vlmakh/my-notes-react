import { Box } from 'components/Box/Box';
import { useState, useEffect, useContext } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';
import { MdOutlineEdit, MdDeleteForever } from 'react-icons/md';
import { EditBtn, DeleteBtn } from './NoteItem.styled';
import { NoteEditModal } from 'components/NoteEditModal/NoteEditModal';
import { MyContext } from 'utils/context';

function NoteItem({ note, deleteNote, editNoteName }) {
  const [todos, setTodos] = useState(note.todos);
  const [editOpen, setEditOpen] = useState(false);
  const { dispatch } = useContext(MyContext);

  useEffect(() => {
    dispatch({ type: 'editNote', noteId: note.noteid, newTodos: todos });
  }, [dispatch, note.noteid, todos]);

  const addTodo = data => {
    if (data.trim() !== '') {
      const newTodo = {
        id: nanoid(4),
        text: data,
        completed: false,
      };
      setTodos([newTodo, ...todos]);
    }
  };

  const editTodo = (todoId, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === todoId ? { ...todo, text: newText } : todo
      )
    );
  };

  const completeTodo = todoId => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = todoId => {
    setTodos(todos.filter(todo => todo.id !== todoId));
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
          {/* <SaveBtn
            type="button"
            aria-label="Save note"
            ref={saveBtn}
            onClick={handleSave}
          >
            <FaSave size="16" />
          </SaveBtn> */}

          <h4>{note.name}</h4>

          <EditBtn type="button" aria-label="Edit note" onClick={toggleModal}>
            <MdOutlineEdit size="20" />
          </EditBtn>
          <DeleteBtn
            type="button"
            onClick={() => deleteNote(note.noteid, note.name)}
          >
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
