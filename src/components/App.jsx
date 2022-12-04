import { Box } from 'components/Box/Box';
import { useEffect, useReducer, createContext } from 'react';
import { nanoid } from 'nanoid';

import { NoteItem } from 'components/NoteItem/NoteItem';
import { NoteAddBtn } from 'components/NoteAddBtn/NoteAddBtn';

const startNotes = [
  {
    noteid: nanoid(4),
    name: 'New note',
    todos: [
      { id: nanoid(6), text: 'task1', completed: false },
      { id: nanoid(6), text: 'task2', completed: false },
    ],
    color: getRandomHexColor(),
  },
];

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const MyContext = createContext();

const reducer = (mynotes, action) => {
  switch (action.type) {
    case 'addNote':
      const newNote = {
        noteid: nanoid(4),
        name: 'New note',
        todos: [],
        color: getRandomHexColor(),
      };
      return [...mynotes, newNote];
    case 'editNote':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, todos: action.newTodos }
          : noteItem;
      });
    case 'deleteNote':
      if (global.confirm(`Delete note: ${action.name}?`)) {
        return mynotes.filter(note => note.noteid !== action.noteId);
      }
      break;
    case 'editNoteName':
      return mynotes.map(noteItem => {
        return noteItem.noteid === action.noteId
          ? { ...noteItem, name: action.newName }
          : noteItem;
      });
    default:
      return mynotes;
  }
};

function App() {
  const savedData = JSON.parse(localStorage.getItem('mynotes'));
  const [mynotes, dispatch] = useReducer(
    reducer,
    savedData ? savedData : startNotes
  );

  useEffect(() => {
    localStorage.setItem('mynotes', JSON.stringify(mynotes));
  }, [mynotes]);

  return (
    <MyContext.Provider value={{ dispatch }}>
      <Box p={3} display="flex" flexWrap="wrap">
        {mynotes.map(noteItem => {
          return (
            <NoteItem
              key={noteItem.noteid}
              note={noteItem}
              editNote={(noteId, newTodos) => {
                dispatch({ type: 'editNote', noteId, newTodos });
              }}
              deleteNote={(noteId, name) => {
                dispatch({ type: 'deleteNote', noteId, name });
              }}
              editNoteName={(noteId, newName) => {
                dispatch({ type: 'editNoteName', noteId, newName });
              }}
            />
          );
        })}
        <NoteAddBtn
          addNote={() => {
            dispatch({ type: 'addNote' });
          }}
        />
      </Box>
    </MyContext.Provider>
  );
}

export { App, MyContext };
