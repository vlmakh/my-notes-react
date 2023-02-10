import styled from '@emotion/styled';

export const AddForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    margin: 0;
    border-bottom: ${p => p.theme.borders.grey};
    background-color: transparent;
`

export const InputNew = styled.input`
    padding: 4px;
    border: none;
    background-color: transparent;

    :focus-visible {
      outline: none;
    }
`

export const AddBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${p => p.theme.colors.textSec};

  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.textPrim};
  }
`;