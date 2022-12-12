import { MasonryBox } from 'components/Box/Box';
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

  const breakpointColumnsObj = {
    default: 7,
    2211: 6,
    1895: 5,
    1579: 4,
    1263: 3,
    947: 2,
    631: 1,
  };

  return (
    <MyContext.Provider value={{ dispatch }}>
      {/* <Box p={3} display="flex" flexWrap="wrap"> */}
      <MasonryBox breakpointCols={breakpointColumnsObj}>
        {mynotes.map(noteItem => {
          return <NoteItem key={noteItem.noteid} note={noteItem} />;
        })}
        <NoteAddBtn />
      </MasonryBox>
      {/* </Box> */}
    </MyContext.Provider>
  );
}

export { App };
