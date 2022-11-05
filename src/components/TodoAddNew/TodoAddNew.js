import { AddForm, InputNew, AddBtn } from './TodoAddNew.styled';
import { FaReact } from 'react-icons/fa';
import { MdAddCircle } from 'react-icons/md';
import { useState } from 'react';

const TodoAddNew = ({ onSubmit }) => {
  const [text, setText] = useState('');

  const onFormInput = event => {
    setText(event.currentTarget.value);
  };

  const addTodo = event => {
    event.preventDefault();
    setText('');
    onSubmit(text);
  };

  return (
    <AddForm onSubmit={addTodo}>
      <FaReact size="24" />
      <InputNew
        type="text"
        name="text"
        value={text}
        onChange={onFormInput}
        placeholder="New task"
      ></InputNew>
      <AddBtn type="submit" aria-label="Add task">
        <MdAddCircle size="20" />
      </AddBtn>
    </AddForm>
  );
};

export { TodoAddNew };
