import { Navigate, Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import {
  HomeBox,
  MenuLink,
  ImgBox,
  FormBox,
  LinkBox,
} from 'components/Login/Login.styled';
import logo from 'images/logo2.webp';

function HomePage({ isLoggedIn }) {
  return (
    <>
      {isLoggedIn && <Navigate to="/notes" />}

      <Header />

      <HomeBox>
        <ImgBox>
          <img src={logo} alt="logo" width="300" />
        </ImgBox>

        <FormBox>
          <LinkBox>
            <MenuLink to="/">Login</MenuLink>
            <MenuLink to="/signup">Registration</MenuLink>
          </LinkBox>

          <Outlet />
        </FormBox>
      </HomeBox>

      <Footer />
    </>
  );
}

export { HomePage };
