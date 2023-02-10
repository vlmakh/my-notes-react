import { Box } from 'components/Box/Box';
import { MdAddCircleOutline } from 'react-icons/md';
import { Button } from 'components/Buttons/Buttons';
import { useState, useContext } from 'react';
import { MyContext } from 'utils/context';
import { addNote } from 'utils/operations';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export function BtnsBlock({ dragNotes, toggleDragNotes }) {
  const { dispatch } = useContext(MyContext);
  const [isProcessing, setIsProcessing] = useState(false);

  const newNote = {
    name: 'New note',
    todos: [],
    color: getRandomHexColor(),
  };

  const handleAdd = () => {
    setIsProcessing(true);

    addNote(newNote)
      .then(data => {
        dispatch({ type: 'addNote', newNote: data });
        setIsProcessing(false);
      })
      .catch(error => console.log(error));
  };

  return (
    <Box display="flex">
      <Button type="button" onClick={handleAdd} disabled={isProcessing}>
        Add Note <MdAddCircleOutline size="24" />
      </Button>

      {/* <Label
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
      </Label> */}
    </Box>
  );
}
