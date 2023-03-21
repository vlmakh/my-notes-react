import { Footer } from 'components/Footer/Footer';
import {
  UserBox,
  UpdateForm,
  StyledField,
  Label,
} from 'components/User/User.styled';
import { Button, ButtonLink } from 'components/Buttons/Buttons';
import { Navigate } from 'react-router-dom';
import { Formik } from 'formik';
import { updateUserName, updateUserPass } from 'utils/operations';
import * as yup from 'yup';
import { useState } from 'react';
// import { Box } from 'components/Box/Box';

let schemaName = yup.object().shape({
  name: yup.string().min(4).required(),
});

let schemaPass = yup.object().shape({
  password: yup.string().min(6).required(),
});

export default function UserPage({ isLoggedIn, setUser, email }) {
  const [isNameUpdating, setIsNameUpdating] = useState(false);
  const [isPassUpdating, setIsPassUpdating] = useState(false);

  const handleUpdateName = (values, { resetForm }) => {
    setIsNameUpdating(true);

    updateUserName({ ...values, email })
      .then(data => {
        setUser(data.name);
        resetForm();
      })
      .catch(error => {})
      .finally(() => {
        setIsNameUpdating(false);
      });
  };

  const handleUpdatePass = (values, { resetForm }) => {
    setIsPassUpdating(true);

    updateUserPass(values)
      .then(data => {
        resetForm();
      })
      .catch(error => {})
      .finally(() => {
        setIsPassUpdating(false);
      });
  };

  return (
    <>
      {!isLoggedIn && <Navigate to="/" />}

      <UserBox>
        <Formik
          onSubmit={handleUpdateName}
          initialValues={{
            name: '',
          }}
          validationSchema={schemaName}
        >
          <UpdateForm>
            <Label htmlFor="name">
              <StyledField
                name="name"
                type="text"
                placeholder="New name"
              ></StyledField>

              <Button type="submit" disabled={isNameUpdating}>
                {isNameUpdating ? 'Please wait...' : 'Update name'}
              </Button>
            </Label>
          </UpdateForm>
        </Formik>

        <Formik
          onSubmit={handleUpdatePass}
          initialValues={{
            password: '',
          }}
          validationSchema={schemaPass}
        >
          <UpdateForm>
            <Label htmlFor="password">
              <StyledField
                name="password"
                type="password"
                placeholder="New password"
                autoComplete="off"
              ></StyledField>
            </Label>

            <Label htmlFor="passwordConfirm">
              <StyledField
                name="passwordConfirm"
                type="password"
                placeholder="Repeat new password"
                autoComplete="off"
              ></StyledField>

              <Button type="submit" disabled={isPassUpdating}>
                {isPassUpdating ? 'Please wait...' : 'Update password'}
              </Button>
            </Label>
          </UpdateForm>
        </Formik>

        <ButtonLink to="/notes">Back to notes</ButtonLink>
      </UserBox>

      <Footer />
    </>
  );
}
