import styled from '@emotion/styled';

export const AddBtn = styled.button`
  cursor: pointer;
  /* margin-left: auto; */
  border: 1px solid grey;
  border-radius: 8px;
  background-color: transparent;
  color: grey;
  box-shadow: none;

  transition: box-shadow 250ms linear, color 250ms linear;

  :hover {
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    color: #212121;
  }
`;