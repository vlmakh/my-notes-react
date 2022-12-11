import { Box } from 'components/Box/Box';
import { useEffect, useReducer } from 'react';
import { NoteItem } from 'components/NoteItem/NoteItem';
import { NoteAddBtn } from 'components/NoteAddBtn/NoteAddBtn';
import { reducer } from 'utils/reducer';
import { startNotes } from 'utils/startNotes';
import { MyContext } from 'utils/context';

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
          return <NoteItem key={noteItem.noteid} note={noteItem} />;
        })}
        <NoteAddBtn />
      </Box>
    </MyContext.Provider>
  );
}

export { App };
