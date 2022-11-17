import { EditTodoForm, SaveBtn } from './TodoEditModal.styled';
import { FaSave } from 'react-icons/fa';
import { useState, useEffect } from 'react';

export function TodoEditModal({ textToUpdate, saveTodo, cancelEdit }) {
  const [newText, setNewText] = useState(textToUpdate);

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

  const onFormInput = event => {
    setNewText(event.currentTarget.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    saveTodo(newText);
  };

  return (
    <EditTodoForm onSubmit={handleSubmit}>
      <input
        type="text"
        name="newText"
        value={newText}
        onChange={onFormInput}
      />
      <SaveBtn type="submit" aria-label="Save task">
        <FaSave size="20" />
      </SaveBtn>
    </EditTodoForm>
  );
}
