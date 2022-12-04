import styled from '@emotion/styled';
import { Reorder } from 'framer-motion';

export const ReorderItemStyled = styled(Reorder.Item)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 8px;

  transition: background-color 250ms linear;

:hover {
  background-color: lightgrey;
}

:not(:last-child) {
  border-bottom: 1px solid lightgrey;
}
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Checkbox = styled.input`
  display: none;

  :checked + button {
    color: grey;
  }
  :checked ~ span {
    text-decoration: line-through grey 2px;
    color: grey;
  }
`;

export const TodoText = styled.span`
  width: 176px;
  margin-left: 8px;
  font-size: 14px;
  font-weight: 600;
  color: #212121;
`;

export const CheckBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: green;  
`;

export const EditBtn = styled.button`  
  margin-left: auto;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: grey;

  transition: color 250ms linear;

  :hover.active {
    color: #212121;
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: red;
  }
`;
