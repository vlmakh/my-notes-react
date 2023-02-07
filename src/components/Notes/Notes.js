import { MasonryBox } from 'components/Box/Box';
import { useState, useEffect, useReducer } from 'react';
import { NoteItem } from 'components/NoteItem/NoteItem';
import { NoteAddBtn } from 'components/BtnsBlock/BtnsBlock';
import { reducer } from 'utils/reducer';
import { startNotes } from 'utils/startNotes';
import { MyContext } from 'utils/context';

function Notes() {
  const savedData = JSON.parse(localStorage.getItem('mynotes'));
  const [mynotes, dispatch] = useReducer(
    reducer,
    savedData ? savedData : startNotes
  );
  const [isDraggingNote, setIsDraggingNote] = useState(null);
  const [dragNotes, setDragNotes] = useState(false);

  useEffect(() => {
    localStorage.setItem('mynotes', JSON.stringify(mynotes));
  }, [mynotes]);

  const breakpointColumnsObj = {
    default: 7,
    2163: 6,
    1855: 5,
    1547: 4,
    1239: 3,
    931: 2,
    623: 1,
  };

  const toggleDragNotes = () => {
    setDragNotes(!dragNotes);
  };

  return (
    <MyContext.Provider value={{ dispatch }}>
      <MasonryBox breakpointCols={breakpointColumnsObj}>
        {mynotes.map((noteItem, idx) => {
          return (
            <NoteItem
              key={noteItem.noteid}
              idx={idx}
              note={noteItem}
              isDraggingNote={isDraggingNote}
              setIsDraggingNote={setIsDraggingNote}
              dragNotes={dragNotes}
            />
          );
        })}
        <NoteAddBtn toggleDragNotes={toggleDragNotes} dragNotes={dragNotes} />
      </MasonryBox>
    </MyContext.Provider>
  );
}

export { Notes };
