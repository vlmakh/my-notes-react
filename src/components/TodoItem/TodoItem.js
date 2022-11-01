import { useState } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import { FaCheckCircle, FaMarker } from 'react-icons/fa';
import { nanoid } from 'nanoid';
import {
  Todo,
  Label,
  TodoText,
  DeleteBtn,
  Checkbox,
  EditBtn,
} from './TodoItem.styled';
import { EditTodoModal } from 'components/EditTodoModal/EditTodoModal';

function TodoItem({ id, text, completed, completeTodo, editTodo, deleteTodo }) {
  const [editOpen, setEditOpen] = useState(false);

  const toggleModal = () => {
    setEditOpen(!editOpen);
  };

  const handleEdit = newText => {
    toggleModal();
    editTodo(id, newText);
  };

  const handleComplete = () => {
    completeTodo(id);
  };

  const handleDelete = () => {
    deleteTodo(id);
  };

  return (
    <Todo key={nanoid(4)}>
      <Label onClick={handleComplete}>
        <Checkbox type="checkbox" checked={completed ? true : false} readOnly />
        <span>
          <FaCheckCircle size="20" />
        </span>

        <TodoText>{text}</TodoText>
      </Label>
      <EditBtn
        type="button"
        onClick={toggleModal}
        disabled={completed ? true : false}
      >
        <FaMarker />
      </EditBtn>
      <DeleteBtn type="button" onClick={handleDelete}>
        <MdDeleteForever size="20" />
      </DeleteBtn>
      {editOpen && <EditTodoModal saveTodo={handleEdit} textToUpdate={text} />}
    </Todo>
  );
}

export { TodoItem };
