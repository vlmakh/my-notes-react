import { Box } from 'components/Box/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { AddBtn } from './NoteAddBtn.styled';
import { useContext } from 'react';
import { MyContext } from 'utils/context';

export function NoteAddBtn({ addNote }) {
  const { dispatch } = useContext(MyContext);

  return (
    <Box mr={3} mb={3} display="flex">
      <AddBtn
        type="button"
        onClick={() => {
          dispatch({ type: 'addNote' });
        }}
      >
        <MdAddCircleOutline size="24" />
      </AddBtn>
    </Box>
  );
}
