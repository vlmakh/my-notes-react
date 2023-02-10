import styled from '@emotion/styled';

export const EditTodoForm = styled.form`
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

export const EditTodoInput = styled.input`
  flex-grow: 1;
  font-weight: 600;
  background-color: transparent;
`;

export const SaveBtn = styled.button`
  cursor: pointer;
  margin-left: 20px;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.textSec};

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.textPrim};
  }
`;
