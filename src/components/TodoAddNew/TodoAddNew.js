import { AddForm, InputNew, AddBtn } from './TodoAddNew.styled';
import { MdAddCircle, MdOutlineStickyNote2 } from 'react-icons/md';
import { useState } from 'react';
import { Box } from 'components/Box/Box';

const TodoAddNew = ({ onSubmit, bcgNoteColor }) => {
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
    <Box bg={bcgNoteColor}>
      <AddForm onSubmit={addTodo}>
        <MdOutlineStickyNote2 size="24" />
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
    </Box>
  );
};

export { TodoAddNew };
