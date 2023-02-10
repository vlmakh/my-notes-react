import styled from '@emotion/styled';
import { Reorder } from 'framer-motion';

export const ReorderItemStyled = styled(Reorder.Item)`
  position: relative;
  display: flex;
  align-items: center;
  padding: 4px 8px;

  transition: background-color 250ms linear;

  :hover {
    background-color: ${p => p.theme.colors.bcgPrim};
  }

  :not(:last-child) {
    border-bottom: ${p => p.theme.borders.light};
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-left: 8px;
`;

export const Checkbox = styled.input`
  display: none;

  :checked + button {
    color: ${p => p.theme.colors.textSec};
  }
  :checked ~ span {
    text-decoration: line-through grey 2px;
    color: ${p => p.theme.colors.textSec};
  }
`;

export const CheckBtn = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: green;
`;

export const TodoText = styled.span`
  max-width: 220px;
  margin-left: 8px;
  font-size: ${p => p.theme.fontSizes.xs};
  font-weight: 600;
  color: ${p => p.theme.colors.textPrim};
  word-wrap: break-word;
`;

export const EditBtn = styled.button`
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: ${p => p.theme.colors.textSec};

  transition: color 250ms linear;

  :hover.active {
    color: ${p => p.theme.colors.textPrim};
    cursor: pointer;
  }
`;

export const DeleteBtn = styled.button`
  cursor: pointer;
  margin-left: 8px;
  border: none;
  background-color: transparent;
  width: 20px;
  height: 30px;
  padding: 0;
  color: ${p => p.theme.colors.textSec};

  transition: color 250ms linear;

  :hover {
    color: red;
  }
`;
