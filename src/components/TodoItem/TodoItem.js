import { useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { MdDeleteForever } from 'react-icons/md';
import { FaCheckCircle, FaMarker, FaGripLines } from 'react-icons/fa';
import { Box } from 'components/Box/Box';
// import { nanoid } from 'nanoid';
import {
  Label,
  TodoText,
  DeleteBtn,
  Checkbox,
  CheckBtn,
  EditBtn,
} from './TodoItem.styled';
import css from './TodoItem.module.css';
import { TodoEditModal } from 'components/TodoEditModal/TodoEditModal';

function TodoItem({
  id,
  text,
  completed,
  todo,
  completeTodo,
  editTodo,
  deleteTodo,
}) {
  const [editOpen, setEditOpen] = useState(false);
  const controls = useDragControls();

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
    <Reorder.Item
      value={todo}
      className={css.todoItem}
      dragListener={false}
      dragControls={controls}
    >
      <Box onPointerDown={e => controls.start(e)} className={css.move}>
        <FaGripLines size="20" />
      </Box>
      <Label>
        <Checkbox type="checkbox" checked={completed ? true : false} readOnly />
        <CheckBtn onClick={handleComplete}>
          <FaCheckCircle size="20" />
        </CheckBtn>

        <TodoText>{text}</TodoText>
      </Label>
      <EditBtn
        type="button"
        aria-label="Edit task"
        onClick={toggleModal}
        disabled={completed ? true : false}
      >
        <FaMarker />
      </EditBtn>
      <DeleteBtn type="button" aria-label="Delete task" onClick={handleDelete}>
        <MdDeleteForever size="20" />
      </DeleteBtn>
      {editOpen && <TodoEditModal saveTodo={handleEdit} textToUpdate={text} />}
    </Reorder.Item>
  );
}

export { TodoItem };
