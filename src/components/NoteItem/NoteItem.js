import { Box } from 'components/Box/Box';
import { useState, useContext, useEffect, useRef } from 'react';
import { nanoid } from 'nanoid';
import { TodoList } from 'components/TodoList/TodoList';
import { TodoAddNew } from 'components/TodoAddNew/TodoAddNew';
import {
  MdOutlineEdit,
  MdDeleteForever,
  MdFormatColorFill,
} from 'react-icons/md';
import {
  NoteBoxOuter,
  NoteBoxInner,
  NoteName,
  EditBtn,
  DeleteBtn,
} from './NoteItem.styled';
import { NoteEditModal } from 'components/NoteEditModal/NoteEditModal';
import { MyContext } from 'utils/context';
import { HexColorPicker } from 'react-colorful';
import { Modal } from 'components/Modal/Modal';
import { Confirm } from 'components/Confirm/Confirm';
import {
  deleteNote,
  updateNoteColor,
  updateNoteName,
  updateNoteTodos,
} from 'utils/operations';

function NoteItem({ note, idx }) {
  const [todos, setTodos] = useState(note.todos);
  const [noteColor, setNoteColor] = useState(note.color);
  const [editNameOpen, setEditNameOpen] = useState(false);
  const [editColorOpen, setEditColorOpen] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const { dispatch } = useContext(MyContext);
  const bcgNoteColor = note.color + '55';
  const [isProcessing, setIsProcessing] = useState(false);

  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    dispatch({
      type: 'editNoteTodos',
      noteId: note._id,
      newTodos: todos,
    });

    updateNoteTodos(note._id, todos);
  }, [dispatch, note._id, todos]);

  const toggleConfirm = () => {
    setShowConfirm(!showConfirm);
  };

  const handleDeleteNote = note => {
    setIsProcessing(true);

    deleteNote(note)
      .then(data => {
        dispatch({ type: 'deleteNote', noteId: data._id });
        setIsProcessing(false);
      })
      .catch(error => console.log(error));
  };

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

  const toggleNoteNameModal = () => {
    setEditNameOpen(!editNameOpen);
  };

  const handleEditName = newName => {
    toggleNoteNameModal();
    dispatch({ type: 'editNoteName', noteId: note._id, newName });

    updateNoteName(note._id, newName);
  };

  const toggleNoteColorModal = () => {
    setEditColorOpen(!editColorOpen);

    if (editColorOpen) {
      updateNoteColor(note._id, noteColor);
    }
  };

  const handleNoteColor = newColor => {
    setNoteColor(newColor);
    dispatch({
      type: 'editNoteColor',
      noteId: note._id,
      newColor: noteColor,
    });
  };

  return (
    <NoteBoxOuter>
      <NoteBoxInner>
        {editColorOpen && (
          <Box position="absolute" top="0" left="0" zIndex="200">
            <HexColorPicker color={noteColor} onChange={handleNoteColor} />
          </Box>
        )}

        <Box
          bg={note.color}
          p={2}
          textAlign="center"
          color="white"
          display="flex"
          justifyContent="space-between"
          position="relative"
        >
          <NoteName>{note.name}</NoteName>

          <Box ml="auto" display="flex">
            <EditBtn
              type="button"
              aria-label="Edit color"
              onClick={toggleNoteColorModal}
            >
              <MdFormatColorFill size="20" />
            </EditBtn>
            <EditBtn
              type="button"
              aria-label="Edit note"
              onClick={toggleNoteNameModal}
            >
              <MdOutlineEdit size="20" />
            </EditBtn>
            <DeleteBtn
              type="button"
              onClick={() => setShowConfirm(true)}
              aria-label="Delete note"
            >
              <MdDeleteForever size="20" />
            </DeleteBtn>
          </Box>

          {editNameOpen && (
            <NoteEditModal
              saveNoteName={handleEditName}
              nameToUpdate={note.name}
              cancelEdit={toggleNoteNameModal}
            />
          )}

          {showConfirm && (
            <Modal onClose={toggleConfirm}>
              <Confirm
                onFormSubmit={() => handleDeleteNote(note)}
                toggleConfirm={toggleConfirm}
                name={note.name}
                isProcessing={isProcessing}
              />
            </Modal>
          )}
        </Box>

        <TodoAddNew onSubmit={addTodo} bcgNoteColor={bcgNoteColor} />

        <TodoList
          todos={todos}
          setTodos={setTodos}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          completeTodo={completeTodo}
        ></TodoList>
      </NoteBoxInner>
    </NoteBoxOuter>
  );
}

export { NoteItem };
