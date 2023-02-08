import { Navigate, Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { LogoText, My } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { Box } from 'components/Box/Box';
import { LoginBox, MenuLink } from 'components/Login/Login.styled';

function HomePage({ isLoggedIn, setIsLoggedIn }) {
  return (
    <>
      {isLoggedIn && <Navigate to="/notes" />}

      <Header>
        <LogoText>
          <My>My</My>Notes
        </LogoText>
      </Header>

      <LoginBox>
        <Box display="flex" justifyContent="space-around">
          <MenuLink to="/">Login</MenuLink>
          <MenuLink to="/signup">Registration</MenuLink>
        </Box>

        <Outlet />
      </LoginBox>

      <Footer></Footer>
    </>
  );
}

export { HomePage };
