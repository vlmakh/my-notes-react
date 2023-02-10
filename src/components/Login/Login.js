import {
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
  Button,
} from './Login.styled';
import { Formik } from 'formik';
import { login } from 'utils/operations';
import * as yup from 'yup';
import { useState, useEffect } from 'react';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export default function Login({ setUser, token, setToken, setIsLoggedIn }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsProcessing(true);

    login(values)
      .then(data => {
        resetForm();
        setToken(data.token);
        setUser(data.user.name);
        setIsLoggedIn(true);
      })
      .catch(error => {})
      .finally(() => {
        setIsProcessing(false);
      });
  };

  useEffect(() => {
    localStorage.setItem('token', JSON.stringify(token));
  }, [token]);

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
    >
      <StyledForm>
        <Label htmlFor="email">
          <span>email</span>
          <StyledField name="email" type="text" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="email" />
        </Label>

        <Label htmlFor="password">
          <span>password </span>
          <StyledField
            name="password"
            type="password"
            placeholder=" "
            autoComplete="off"
          ></StyledField>
          <StyledErrorMsg component="div" name="password" />
        </Label>

        <Button type="submit" disabled={isProcessing}>
          Login
        </Button>
      </StyledForm>
    </Formik>
  );
}
