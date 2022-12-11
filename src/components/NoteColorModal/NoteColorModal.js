import { EditColorForm, SaveBtn } from './NoteColorModal.styled';
import { FaSave } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
// import { Box } from 'components/Box/Box';
// import { MyContext } from 'utils/context';

export function NoteColorModal({ colorToUpdate, saveNoteColor, cancelEdit }) {
  const [noteColor, setNoteColor] = useState(colorToUpdate);
  //   const { dispatch } = useContext(MyContext);

  useEffect(() => {
    window.addEventListener('keydown', handleEscape);

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  });

  const handleEscape = event => {
    if (event.code === 'Escape') {
      cancelEdit();
    }
  };

  const handleNoteColor = newColor => {
    setNoteColor(newColor);
    // console.log(newColor);
  };

  const handleSubmit = event => {
    event.preventDefault();
    // handleNoteColor();
  };

  return (
    <EditColorForm onSubmit={handleSubmit}>
      <HexColorPicker color={noteColor} onChange={handleNoteColor} />

      <SaveBtn type="submit" aria-label="Save color">
        <FaSave size="20" />
      </SaveBtn>
    </EditColorForm>
  );
}
