import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;
  /* padding: 8px; */
  /* cursor: pointer; */
`;

export const Checkbox = styled.input`
  display: none;

  & + span {
    color: grey;
  }

  :checked + button {
    color: green;
  }
  :checked ~ span {
    text-decoration: line-through #212121 2px;
  }
`;

export const TodoText = styled.span`
  width: 180px;
  margin-left: 8px;
  font-weight: 600;
  color: #212121;
`;

export const CheckBtn = styled.button`
  cursor: pointer;
  /* margin-left: auto; */
  border: none;
  background-color: transparent;
  width: 30px;
  height: 30px;
  color: grey;

  /* transition: color 250ms linear;

  :hover {
    color: #212121;
  } */
`;

export const EditBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
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

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
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


