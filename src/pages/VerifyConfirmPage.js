import { Footer } from 'components/Footer/Footer';
import { InfoBox, ImgBox, MsgBox, Message } from 'components/Info/Info.styled';
import { ButtonLink } from 'components/Buttons/Buttons';
import logo from 'images/logo2.webp';
import { verify } from 'utils/operations';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function VerifyConfirmPage() {
  const [msg, setMsg] = useState('Please wait...');
  const params = useParams();
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    verify(params.token)
      .then(() => {
        setMsg('Email was confirmed successfully. Please login');
      })
      .catch(error => {
        setMsg(error.response.data.message);
      })
      .finally(() => setIsProcessing(false));
  }, [params.token]);

  return (
    <>
      <InfoBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <MsgBox>
          <Message>{msg}</Message>

          <ButtonLink to="/" disabled={isProcessing}>
            Login
          </ButtonLink>
        </MsgBox>
      </InfoBox>

      <Footer />
    </>
  );
}
