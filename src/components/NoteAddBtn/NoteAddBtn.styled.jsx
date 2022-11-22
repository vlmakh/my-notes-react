import styled from '@emotion/styled';

export const AddBtn = styled.button`
display: flex;
align-items: center;
justify-content: center;
  cursor: pointer;
  width: 40px;
  height: 40px;
  border: 1px solid grey;
  border-radius: 50%;
  background-color: white;
  color: grey;
  box-shadow: none;

  transition: box-shadow 250ms linear, color 250ms linear;

  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    color: #212121;
  }
`;