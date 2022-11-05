import { Box } from 'components/Box/Box';
// import { useState, useEffect } from 'react';
// import { nanoid } from 'nanoid';

import { NoteItem } from 'components/NoteItem/NoteItem';
// import { NoteAddBtn } from 'components/NoteAddBtn/NoteAddBtn';


// const startNotes = [{
//   noteid: nanoid(4), note: [{ id: nanoid(6), text: "task1", completed: false}, { id: nanoid(6), text: "task2", completed: false}]
// },  ];

function App() {
  // const savedData = JSON.parse(localStorage.getItem('mynotes'));
  // const [mynotes, setMynotes] = useState(savedData ? savedData : startNotes);

  // console.log(mynotes)

  // useEffect(() => {
  //   localStorage.setItem('mynotes', JSON.stringify(mynotes));
  // }, [mynotes]);

  // const addNote = () => {
  //   const newNote = {
  //     noteid: nanoid(4), 
  //     note: 
  //     {id: nanoid(6),
  //     text: '',
  //     completed: false,}
  //   };
  //   setMynotes([ ...mynotes, newNote]);
  // };

   

  // const deleteNote = noteId => {
  //   if (global.confirm('Вы действительно хотите удалить?')) {
  //     setMynotes(mynotes.filter(note => note.noteid !== noteId));
  //   }
  // };

  return (
    <Box p={3} display="flex" flexWrap="wrap">
      <NoteItem />
      {/* {mynotes.map(noteItem => { return <NoteItem key={ noteItem.noteid} noteid={noteItem.noteid} note={noteItem.note} />})}
      <NoteAddBtn addNote={addNote } /> */}
    </Box>
  );
}

export { App };
