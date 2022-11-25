import { useState } from 'react';
import { Reorder, useDragControls } from 'framer-motion';
import { ImCross } from 'react-icons/im';
import { FaCheck, FaArrowAltCircleRight, FaGripLines } from 'react-icons/fa';
import { MdEdit } from 'react-icons/md';
import { Box } from 'components/Box/Box';
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
      <Box onPointerDown={e => controls.start(e)}>
        <FaGripLines size="18" cursor="grab" color="#212121" />
      </Box>
      <Label>
        <Checkbox type="checkbox" checked={completed ? true : false} readOnly />
        <CheckBtn onClick={handleComplete}>
          {completed ? (
            <FaCheck size="18" />
          ) : (
            <FaArrowAltCircleRight size="18" />
          )}
        </CheckBtn>

        <TodoText>{text}</TodoText>
      </Label>
      <EditBtn
        type="button"
        aria-label="Edit task"
        onClick={toggleModal}
        disabled={completed ? true : false}
        className={completed ? '' : 'active'}
      >
        <MdEdit size="18" />
      </EditBtn>
      <DeleteBtn type="button" aria-label="Delete task" onClick={handleDelete}>
        <ImCross />
      </DeleteBtn>
      {editOpen && (
        <TodoEditModal
          saveTodo={handleEdit}
          textToUpdate={text}
          cancelEdit={toggleModal}
        />
      )}
    </Reorder.Item>
  );
}

export { TodoItem };
