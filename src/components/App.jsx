import { Box } from 'components/Box/Box';
import { useState, useEffect } from 'react';
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
  },
];

function App() {
  const savedData = JSON.parse(localStorage.getItem('mynotes'));
  const [mynotes, setMynotes] = useState(savedData ? savedData : startNotes);

  useEffect(() => {
    localStorage.setItem('mynotes', JSON.stringify(mynotes));
  }, [mynotes]);

  const addNote = () => {
    const newNote = {
      noteid: nanoid(4),
      name: 'New note',
      todos: [],
    };
    setMynotes([...mynotes, newNote]);
  };

  const editNote = (noteId, newTodos) => {
    setMynotes(
      mynotes.map(noteItem => {
        return noteItem.noteid === noteId
          ? { ...noteItem, todos: newTodos }
          : noteItem;
      })
    );
  };

  const deleteNote = noteId => {
    if (global.confirm('Delete Note?')) {
      setMynotes(mynotes.filter(note => note.noteid !== noteId));
    }
  };

  const editNoteName = (noteId, newName) => {
    setMynotes(
      mynotes.map(noteItem => {
        return noteItem.noteid === noteId
          ? { ...noteItem, name: newName }
          : noteItem;
      })
    );
  };

  return (
    <Box p={3} display="flex" flexWrap="wrap">
      {mynotes.map(noteItem => {
        return (
          <NoteItem
            key={noteItem.noteid}
            note={noteItem}
            editNote={editNote}
            deleteNote={deleteNote}
            editNoteName={editNoteName}
          />
        );
      })}
      <NoteAddBtn addNote={addNote} />
    </Box>
  );
}

export { App };
