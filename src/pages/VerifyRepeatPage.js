import { Footer } from 'components/Footer/Footer';
import {
  LogoutBox,
  ImgBox,
  MsgBox,
  Message,
} from 'components/Logout/Logout.styled';
import { ButtonLink } from 'components/Buttons/Buttons';
import logo from 'images/logo2.webp';

export default function VerifyRepeatPage() {
  return (
    <>
      <LogoutBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <MsgBox>
          <Message>Insert your email to confirm</Message>

          <ButtonLink to="/">Confirm</ButtonLink>
        </MsgBox>
      </LogoutBox>

      <Footer />
    </>
  );
}
