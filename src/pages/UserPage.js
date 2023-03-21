import { Footer } from 'components/Footer/Footer';
import {
  UserBox,
  UpdateForm,
  StyledField,
  Label,
  StyledErrorMsg,
} from 'components/User/User.styled';
import { Button, ButtonLink } from 'components/Buttons/Buttons';
import { Navigate } from 'react-router-dom';
import { Formik } from 'formik';
import { updateUserName, updateUserPass } from 'utils/operations';
import * as yup from 'yup';
import { useState } from 'react';
import { MdOutlineArrowBack } from 'react-icons/md';

let schemaName = yup.object().shape({
  name: yup.string().min(4).required(),
});

let schemaPass = yup.object().shape({
  password: yup.string().min(6).required(),
  passwordConfirm: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
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

    updateUserPass({ ...values, email })
      .then(() => {
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
              <StyledErrorMsg component="div" name="name" />

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
            passwordConfirm: '',
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
              <StyledErrorMsg component="div" name="password" />
            </Label>

            <Label htmlFor="passwordConfirm">
              <StyledField
                name="passwordConfirm"
                type="password"
                placeholder="Repeat new password"
                autoComplete="off"
              ></StyledField>
              <StyledErrorMsg component="div" name="passwordConfirm" />

              <Button type="submit" disabled={isPassUpdating}>
                {isPassUpdating ? 'Please wait...' : 'Update pass'}
              </Button>
            </Label>
          </UpdateForm>
        </Formik>

        <ButtonLink to="/notes">
          <MdOutlineArrowBack size="24" />
          Back to notes
        </ButtonLink>
      </UserBox>

      <Footer />
    </>
  );
}
