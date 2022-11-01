import { EditTodoForm, SaveBtn } from './EditTodoModal.styled';
import { FaSave } from 'react-icons/fa';
import { useState } from 'react';

export function EditTodoModal({ textToUpdate, saveTodo }) {
  const [newText, setNewText] = useState(textToUpdate);

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
      <SaveBtn type="submit">
        <FaSave size="20" />
      </SaveBtn>
    </EditTodoForm>
  );
}
