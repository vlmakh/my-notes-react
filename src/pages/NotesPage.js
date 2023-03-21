import { MasonryBox } from 'components/Box/Box';
import { useState, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { NoteItem } from 'components/NoteItem/NoteItem';
import { BtnsBlock } from 'components/BtnsBlock/BtnsBlock';
import { reducer } from 'utils/reducer';
import { MyContext } from 'utils/context';
import { Footer } from 'components/Footer/Footer';
import { getNotes } from 'utils/operations';
import { Box } from 'components/Box/Box';
import { Modal } from 'components/Modal/Modal';
import { SortMenu } from 'components/SortMenu/SortMenu';

export default function NotesPage({ isLoggedIn, sort, setSort }) {
  const [mynotes, dispatch] = useReducer(reducer, []);
  const [isProcessing, setIsProcessing] = useState(true);
  const [showSortMenu, setShowSortMenu] = useState(false);

  useEffect(() => {
    getNotes()
      .then(notes => {
        dispatch({ type: 'getNotes', notes });
        setIsProcessing(false);
        return notes;
      })
      .then(notes => {
        dispatch({ type: sort, notes });
      })
      .catch(error => {});
  }, [sort]);

  const breakpointColumnsObj = {
    default: 7,
    2163: 6,
    1855: 5,
    1547: 4,
    1239: 3,
    931: 2,
    623: 1,
  };

  const toggleSortMenu = () => {
    setShowSortMenu(!showSortMenu);
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}
      <MyContext.Provider value={{ dispatch }}>
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

        {showSortMenu && (
          <Modal onClose={toggleSortMenu}>
            <SortMenu
              toggleSortMenu={toggleSortMenu}
              notes={mynotes}
              sort={sort}
              setSort={setSort}
            />
          </Modal>
        )}

        <Footer>
          <BtnsBlock toggleSortMenu={toggleSortMenu} />
        </Footer>
      </MyContext.Provider>
    </>
  );
}
