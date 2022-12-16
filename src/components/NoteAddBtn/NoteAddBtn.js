import { Box } from 'components/Box/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { AddBtn, Label, CheckMove } from './NoteAddBtn.styled';
import { useContext } from 'react';
import { MyContext } from 'utils/context';

export function NoteAddBtn({ dragNotes, toggleDragNotes }) {
  const { dispatch } = useContext(MyContext);

  return (
    <Box mr={3} mb={3} display="flex">
      <AddBtn
        type="button"
        onClick={() => {
          dispatch({ type: 'addNote' });
        }}
      >
        Add Note <MdAddCircleOutline size="24" />
      </AddBtn>

      <Label
        onClick={toggleDragNotes}
        htmlFor="drag"
        checked={dragNotes ? true : false}
      >
        Drag Notes
        <CheckMove
          name="drag"
          type="checkbox"
          checked={dragNotes ? true : false}
          readOnly
        />
      </Label>
    </Box>
  );
}
