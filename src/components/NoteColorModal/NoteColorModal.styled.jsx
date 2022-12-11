import styled from '@emotion/styled';

export const EditColorForm = styled.form`
  position: absolute;
  display: flex;
  justify-content: space-between;
  /* align-items: top; */
  top: 0;
  left: 0;
  padding: 0 8px;
  width: 300px;
  height: 20px;
  z-index: 100;
  background-color: lightgrey;
  box-sizing: border-box;
`;

export const SaveBtn = styled.button`
  cursor: pointer;
  margin-left: auto;
  margin-right: 8px;
  border: none;
  background-color: transparent;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: #212121;
  }
`;
