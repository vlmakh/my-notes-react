import { Outlet } from 'react-router-dom';
import { Header } from 'components/Header/Header';
import { Suspense } from 'react';
import { Box } from 'components/Box/Box';
import { ThreeDots } from 'react-loader-spinner';
import { Layout } from './SharedLayout.styled';
import { logout } from 'utils/operations';

export const SharedLayout = ({ user, isLoggedIn, setIsLoggedIn, setToken }) => {
  const handleLogout = () => {
    logout().then(() => {
      setIsLoggedIn(false);
      setToken(null);
    });
  };

  return (
    <Layout>
      <Header handleLogout={handleLogout} user={user} isLoggedIn={isLoggedIn} />

      <Suspense
        fallback={
          <Box pt={6} display="flex" justifyContent="center">
            <ThreeDots
              height="80"
              width="100"
              radius="9"
              color="#313131"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </Box>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  );
};
