import { Box } from 'components/Box/Box';
import { MdAddCircle } from 'react-icons/md';
import { AddBtn } from './NoteAddBtn.styled';

export function NoteAddBtn({ addNote }) {
  return (
    <Box mr={3} mb={3} display="flex">
      <AddBtn type="button" onClick={addNote}>
        <MdAddCircle size="20" />
      </AddBtn>
    </Box>
  );
}
