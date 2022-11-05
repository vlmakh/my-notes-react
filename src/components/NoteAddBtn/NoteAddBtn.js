import { Box } from 'components/Box/Box';
import { MdAddCircle } from 'react-icons/md';

export function NoteAddBtn({ addNote }) {
  return (
    <Box mr={3} mb={3} display="flex">
      <button type="button" onClick={addNote}>
        <MdAddCircle />
      </button>
    </Box>
  );
}
