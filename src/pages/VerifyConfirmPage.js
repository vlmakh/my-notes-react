import { Footer } from 'components/Footer/Footer';
import {
  LogoutBox,
  ImgBox,
  MsgBox,
  Message,
} from 'components/Logout/Logout.styled';
import { ButtonLink } from 'components/Buttons/Buttons';
import logo from 'images/logo2.webp';
import { verify } from 'utils/operations';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VerifyConfirmPage() {
  const [msg, setMsg] = useState('');
  const params = useParams();

  useEffect(() => {
    verify(params.token)
      .then(() => {
        setMsg('Email was confirmed successfully. Please login');
      })
      .catch(error => {
        setMsg(error.response.data.message);
      });
  }, [params.token]);

  return (
    <>
      <LogoutBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <MsgBox>
          <Message>{msg}</Message>

          <ButtonLink to="/">Login</ButtonLink>
        </MsgBox>
      </LogoutBox>

      <Footer />
    </>
  );
}
