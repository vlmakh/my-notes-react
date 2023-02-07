import styled from '@emotion/styled';

export const AddBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  height: 32px;
  border: 1px solid grey;
  border-radius: 16px;
  background-color: lightgrey;
  color: grey;
  font-size: 14px;
  font-weight: 600;
  box-shadow: none;

  transition: box-shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;

  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    color: #212121;
    background-color: white;
  }
`;

export const Label = styled.label`
  padding: 0 4px;
  display: flex;
  align-items: center;
  margin-left: 8px;
  gap: 8px;
  height: 32px;
  cursor: pointer;
  color: ${p => (p.checked ? '#212121' : 'grey')};
  font-size: 14px;
  font-weight: 600;
  border: 1px solid grey;
  border-radius: 16px;
  background-color: ${p => (p.checked ? 'white' : 'lightgrey')};
  transition: box-shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;

  :hover {
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
    color: #212121;
    background-color: white;
  }
`;

export const CheckMove = styled.input`
  cursor: pointer;
`;
