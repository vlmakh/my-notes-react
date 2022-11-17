import styled from '@emotion/styled';

export const EditNoteForm = styled.form`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: lightgrey;
`

export const SaveBtn = styled.button`
  cursor: pointer;
  margin-left: 20px;
  border: none;
  background-color: transparent;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: #212121;
  }
`;