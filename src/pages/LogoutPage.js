import { Footer } from 'components/Footer/Footer';
import { InfoBox, ImgBox, MsgBox, Message } from 'components/Info/Info.styled';
import { ButtonLink } from 'components/Buttons/Buttons';
import logo from 'images/logo2.webp';

export default function LogoutPage() {
  return (
    <>
      <InfoBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <MsgBox>
          <Message>You logout successfully</Message>

          <ButtonLink to="/">Login again</ButtonLink>
        </MsgBox>
      </InfoBox>

      <Footer />
    </>
  );
}
