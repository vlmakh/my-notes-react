import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-left: 8px;
  /* padding: 8px; */
  /* cursor: pointer; */
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
  width: 164px;
  margin-left: 8px;
  font-weight: 600;
  color: #212121;
`;

export const CheckBtn = styled.button`
  cursor: pointer;
  /* margin-left: auto; */
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: green;

  /* transition: color 250ms linear;

  :hover {
    color: #212121;
  } */
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
