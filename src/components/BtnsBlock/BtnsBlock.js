import { Box } from 'components/Box/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { AddBtn, Label, CheckMove } from './BtnsBlock.styled';
import { useContext } from 'react';
import { MyContext } from 'utils/context';
import { addNote } from 'utils/operations';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export function BtnsBlock({ dragNotes, toggleDragNotes }) {
  const { dispatch } = useContext(MyContext);

  const newNote = {
    name: 'New note',
    todos: [],
    color: getRandomHexColor(),
  };

  const handleAdd = () => {
    addNote(newNote)
      .then(data => {
        // console.log(data);
        dispatch({ type: 'addNote', newNote: data });
      })
      .catch(error => console.log(error));
  };

  return (
    <Box display="flex">
      <AddBtn
        type="button"
        onClick={handleAdd}
        // onClick={() => {
        //   dispatch({ type: 'addNote' });
        // }}
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
