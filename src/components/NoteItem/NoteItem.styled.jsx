import styled from '@emotion/styled';

export const SaveBtn = styled.button`
  margin-right: 8px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 20px;
  padding: 0;
  
  transition: color 250ms linear;

  &.active{
    color: white;
  }  

  :hover.active {
    color: grey;
    cursor: pointer;
  }
`;

export const EditBtn = styled.button`
  cursor: pointer;
  margin-left: auto;
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