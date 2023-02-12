import { ButtonsBox } from './BtnsBlock.styled';
import { MdAddCircleOutline } from 'react-icons/md';
import { FaSort } from 'react-icons/fa';
import { Button } from 'components/Buttons/Buttons';
import { useState, useContext } from 'react';
import { MyContext } from 'utils/context';
import { addNote } from 'utils/operations';
import { getRandomHexColor } from 'utils/getRandomHexColor';

export function BtnsBlock({ toggleSortMenu }) {
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
    <ButtonsBox>
      <Button type="button" onClick={handleAdd} disabled={isProcessing}>
        Add Note <MdAddCircleOutline size="24" />
      </Button>

      <Button type="button" onClick={toggleSortMenu}>
        Sort Notes <FaSort size="24" />
      </Button>
    </ButtonsBox>
  );
}
