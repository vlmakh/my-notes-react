import { Header } from 'components/Header/Header';
import { MasonryBox } from 'components/Box/Box';
import { useState, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { NoteItem } from 'components/NoteItem/NoteItem';
import { BtnsBlock } from 'components/BtnsBlock/BtnsBlock';
import { reducer } from 'utils/reducer';
// import { startNotes } from 'utils/startNotes';
import { MyContext } from 'utils/context';
import { Footer } from 'components/Footer/Footer';
import { LogoText, My } from 'components/Header/Header';
import { getNotes, logout } from 'utils/operations';

function NotesPage({ user, isLoggedIn, setIsLoggedIn, setToken }) {
  // const savedData = JSON.parse(localStorage.getItem('mynotes'));

  const [mynotes, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    getNotes()
      .then(data => {
        // console.log(data);
        dispatch({ type: 'getNotes', notes: data });
      })
      .catch(error => console.log(error.message));
  }, []);

  const [isDraggingNote, setIsDraggingNote] = useState(null);
  const [dragNotes, setDragNotes] = useState(false);
  // const [isLoading, setIsLoading] = useState(null);

  // useEffect(() => {
  //   localStorage.setItem('mynotes', JSON.stringify(mynotes));
  // }, [mynotes]);

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

  const handleLogout = () => {
    logout()
      .then(data => {
        // console.log(data);
        setIsLoggedIn(false);
        setToken(null);
      })
      .catch(error => console.log(error));
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}
      <MyContext.Provider value={{ dispatch }}>
        <Header>
          <LogoText>
            <My>My</My>Notes
          </LogoText>

          {user && (
            <p>
              <b>{user.name}</b>
            </p>
          )}
          <button type="button" onClick={handleLogout}>
            Logout
          </button>
        </Header>

        <MasonryBox breakpointCols={breakpointColumnsObj}>
          {mynotes.map((noteItem, idx) => {
            return (
              <NoteItem
                key={noteItem._id}
                idx={idx}
                note={noteItem}
                isDraggingNote={isDraggingNote}
                setIsDraggingNote={setIsDraggingNote}
                dragNotes={dragNotes}
              />
            );
          })}
        </MasonryBox>

        <Footer>
          <BtnsBlock toggleDragNotes={toggleDragNotes} dragNotes={dragNotes} />
        </Footer>
      </MyContext.Provider>
    </>
  );
}

export { NotesPage };
