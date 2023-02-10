import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Button = styled.button`
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
    box-shadow: ${p => (p.disabled ? null: p.theme.shadows.box)};
    color: ${p => (p.disabled ? "grey": '#212121')};
    background-color: ${p => (p.disabled ? "lightgrey": '#FFFFFF')};
  }
`;

export const ButtonLink = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 32px;
  padding: 0 8px;
  border: 1px solid grey;
  border-radius: 16px;
  background-color: lightgrey;
  color: grey;
  font-size: 14px;
  font-weight: 700;
  box-shadow: none;
  text-decoration: none;
  cursor: pointer;

  transition: box-shadow 250ms linear, color 250ms linear,
    background-color 250ms linear;

  :hover {
    box-shadow: ${p => (p.disabled ? null: p.theme.shadows.box)};
    color: ${p => (p.disabled ? "grey": '#212121')};
    background-color: ${p => (p.disabled ? "lightgrey": '#FFFFFF')};
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
    box-shadow: ${p => p.theme.shadows.button};
    color: #212121;
    background-color: white;
  }
`;

export const CheckMove = styled.input`
  cursor: pointer;
`;