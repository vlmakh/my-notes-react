import styled from '@emotion/styled';

export const SortMenuBox = styled.div`
  display: grid;
  width: 300px;
  text-align: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.6);
  overflow: hidden;
`;

export const SortButton = styled.button`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  cursor: ${p => (p.disabled ? null : 'pointer')};
  border: none;
  outline: ${p => p.theme.borders.grey};

  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => (p.disabled ? null : 'grey')};
    border: none;
  }
`;
