import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const UserBox = styled.div`
  margin: 60px auto 0;
  width: 330px;
`;

export const UpdateForm = styled(Form)`
  padding: 16px 4px;

  border-radius: 8px;
  border: 1px solid grey;

  :nth-of-type(2) {
    margin-top: 8px;
    margin-bottom: 8px;
  }
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

  :nth-of-type(2) {
    margin-top: 8px;
  }
`;
