import styled from '@emotion/styled';

export const Todo = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  padding: 16px 8px 16px 44px;

  transition: background-color 250ms linear;

  :hover {
    background-color: lightgrey;
  }

  :not(:last-child) {
    border-bottom: 1px solid lightgrey;
  }

  :before {
    content: '###';
    position: absolute;
    left: 8px;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  /* padding: 8px; */
  cursor: pointer;
`;

export const Checkbox = styled.input`
  display: none;

  & + span {
    color: grey;
  }

  :checked + span {
    color: green;
  }
  :checked ~ span {
    text-decoration: line-through #212121 2px;
  }
`;

export const TodoText = styled.span`
  width: 180px;
  margin-left: 14px;
  font-weight: 600;
  color: #212121;
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: auto;
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: red;
  }
`;

export const EditBtn = styled.button`
  cursor: pointer;
  /* margin-left: auto; */
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: #212121;
  }
`;
