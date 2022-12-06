import styled from '@emotion/styled';

export const EditBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  color: white;

  transition: color 250ms linear;

  :hover {
    color: grey;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  color: white;

  transition: color 250ms linear;

  :hover {
    color: grey;
  }
`;