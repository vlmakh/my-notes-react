import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';
import { NavLink } from 'react-router-dom';

export const LoginBox = styled('div')`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateY(-50%) translateX(-50%);
  text-align: center;
  width: 360px;
  height: 300px;
  border: 1px solid #212121;
  border-radius: 8px;
  background-color: white;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.8);
  overflow: hidden;
`;

export const MenuLink = styled(NavLink)`
  width: 50%;
  padding: 16px 0;
  font-size: 16px;
  font-weight: 700;
  color: #212121;
  border-bottom: 1px solid #212121;
  text-decoration: none;
  transition: background-color 250ms linear;

  &.active {
    background-color: darkgrey;
  }

  :hover {
    background-color: darkgrey;
  }
`;

export const StyledForm = styled(Form)`
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  height: 248px;
`;

export const StyledField = styled(Field)`
  padding: 4px 8px;

  :focus-visible {
    outline: none;
  }
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

export const StyledErrorMsg = styled(ErrorMessage)`
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translatey(100%);
  font-size: 10px;
  background-color: white;
  color: #212121;
`;

export const Button = styled.button`
  cursor: pointer;
  width: 100%;
  padding: 8px;
  font-size: 16px;
  font-weight: 600;
  border-radius: 4px;
  border: none;
  margin: 0 auto;  
  background-color: grey;
  transition: background-color 250ms linear;

  :hover,
  :focus {
   
    background-color: darkgrey;
  }

  :focus-visible {
    outline: none;
  }
`;
