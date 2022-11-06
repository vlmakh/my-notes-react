import { EditNoteForm, SaveBtn } from './NoteEditModal.styled';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';

export function NoteEditModal({ nameToUpdate, saveNoteName }) {
  const [newName, setNewName] = useState(nameToUpdate);

  const onFormInput = event => {
    setNewName(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    saveNoteName(newName);
  };

  return (
    <EditNoteForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="newName"
        value={newName}
        onChange={onFormInput}
      />
      <SaveBtn type="submit" aria-label="Save task">
        <FaSave size="20" />
      </SaveBtn>
    </EditNoteForm>
  );
}
