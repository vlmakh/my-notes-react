import { Header } from 'components/Header/Header';
import { LogoText, My } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import {
  LogoutBox,
  ImgBox,
  MsgBox,
  Message,
} from 'components/Logout/Logout.styled';
import { ButtonLink } from 'components/Buttons/Buttons';
import logo from 'images/logo2.webp';

export default function LogoutPage() {
  return (
    <>
      <Header>
        <LogoText>
          <My>My</My>Notes
        </LogoText>
      </Header>

      <LogoutBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <MsgBox>
          <Message>You logout successfully</Message>

          <ButtonLink to="/">Login again</ButtonLink>
        </MsgBox>
      </LogoutBox>

      <Footer />
    </>
  );
}
