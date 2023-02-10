import styled from '@emotion/styled';

export const EditNoteForm = styled.form`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  padding: 0 8px;
  width: 100%;
  height: 100%;
  z-index: 100;
  background-color: ${p => p.theme.colors.bcgPrim};
  box-sizing: border-box;
`;

export const EditNoteInput = styled.input`
  font-size: 16px;
  font-weight: 700;
  background-color: transparent;
  color: white;
`;

export const SaveBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.textPrim};
  }
`;
