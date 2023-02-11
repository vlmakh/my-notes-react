import { Header } from 'components/Header/Header';
import { MasonryBox } from 'components/Box/Box';
import { useState, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { NoteItem } from 'components/NoteItem/NoteItem';
import { BtnsBlock } from 'components/BtnsBlock/BtnsBlock';
import { reducer } from 'utils/reducer';
import { MyContext } from 'utils/context';
import { Footer } from 'components/Footer/Footer';
import { getNotes, logout } from 'utils/operations';
import { Box } from 'components/Box/Box';

export default function NotesPage({
  user,
  isLoggedIn,
  setIsLoggedIn,
  setToken,
}) {
  const [mynotes, dispatch] = useReducer(reducer, []);
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    getNotes()
      .then(data => {
        dispatch({ type: 'getNotes', notes: data });
        setIsProcessing(false);
      })
      .catch(error => {});
  }, []);

  const breakpointColumnsObj = {
    default: 7,
    2163: 6,
    1855: 5,
    1547: 4,
    1239: 3,
    931: 2,
    623: 1,
  };

  const handleLogout = () => {
    logout().then(() => {
      setIsLoggedIn(false);
      setToken(null);
    });
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}
      <MyContext.Provider value={{ dispatch }}>
        <Header
          handleLogout={handleLogout}
          user={user}
          isLoggedIn={isLoggedIn}
        />

        {isProcessing && (
          <Box pt={6} textAlign="center" color="white">
            <h1>Loading your notes ...</h1>
          </Box>
        )}

        {!isProcessing && !mynotes.length && (
          <Box pt={6} textAlign="center" color="white">
            <h1>Notes list is empty</h1>
          </Box>
        )}

        {!isProcessing && mynotes.length > 0 && (
          <MasonryBox breakpointCols={breakpointColumnsObj}>
            {mynotes.map((noteItem, idx) => {
              return <NoteItem key={noteItem._id} idx={idx} note={noteItem} />;
            })}
          </MasonryBox>
        )}

        <Footer>
          <BtnsBlock />
        </Footer>
      </MyContext.Provider>
    </>
  );
}
