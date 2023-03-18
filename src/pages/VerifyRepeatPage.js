import { Footer } from 'components/Footer/Footer';
import { InfoBox, ImgBox } from 'components/Info/Info.styled';
import logo from 'images/logo2.webp';
import {
  FormBox,
  StyledForm,
  StyledField,
  Label,
  StyledErrorMsg,
  Button,
  TextLink,
} from 'components/Login/Login.styled';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useState } from 'react';
import { verifyRepeat } from 'utils/operations';
import { Box } from 'components/Box/Box';

let schema = yup.object().shape({
  email: yup.string().email().required(),
});

export default function VerifyRepeatPage() {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsProcessing(true);

    verifyRepeat(values)
      .then(() => {
        resetForm();
      })
      .catch(error => {})
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <>
      <InfoBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <FormBox>
          <Box p={3} textAlign="center" color="#212121">
            <h4>If you didn't receive verification email you can resend it</h4>
          </Box>

          <Formik
            onSubmit={handleSubmit}
            initialValues={{
              email: '',
            }}
            validationSchema={schema}
          >
            <StyledForm>
              <Label htmlFor="email">
                <span>email</span>
                <StyledField
                  name="email"
                  type="text"
                  placeholder=" "
                ></StyledField>
                <StyledErrorMsg component="div" name="email" />
              </Label>

              <Button type="submit" disabled={isProcessing}>
                {isProcessing ? 'Please wait...' : 'Resend'}
              </Button>

              <TextLink to="/">Login</TextLink>
            </StyledForm>
          </Formik>
        </FormBox>
      </InfoBox>

      <Footer />
    </>
  );
}
