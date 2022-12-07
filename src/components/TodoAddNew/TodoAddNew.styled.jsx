import styled from '@emotion/styled';

export const AddForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 16px;
    margin: 0;
    border-bottom: 1px solid grey;
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
  /* margin-left: auto; */
  border: none;
  background-color: transparent;
  color: grey;

  transition: color 250ms linear;

  :hover {
    color: #212121;
  }
`;