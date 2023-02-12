import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { checkCurrentUser } from 'utils/operations';
import { Box } from './Box/Box';
import { ThreeDots } from 'react-loader-spinner';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'utils/theme';

const HomePage = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('components/Login/Login'));
const Signup = lazy(() => import('components/Signup/Signup'));
const NotesPage = lazy(() => import('pages/NotesPage'));
const LogoutPage = lazy(() => import('pages/LogoutPage'));

const startData = { token: null, sort: 'sortByCreatedUp' };
const savedData = JSON.parse(localStorage.getItem('mynotes'));

export const App = () => {
  const [data, setData] = useState(savedData ?? startData);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(data.token);
  const [sort, setSort] = useState(data.sort);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkCurrentUser(token)
      .then(data => {
        setUser(data.name);
        setIsLoggedIn(true);        
      })
      .catch(error => {});
  });

  useEffect(() => {
    setData({ token, sort });
  }, [sort, token]);

  useEffect(() => {
    localStorage.setItem('mynotes', JSON.stringify(data));
  }, [data]);

  return (
    <ThemeProvider theme={theme}>
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
        <Routes>
          <Route path="/" element={<HomePage isLoggedIn={isLoggedIn} />}>
            <Route
              index
              element={
                <Login
                  setUser={setUser}
                  token={token}
                  setToken={setToken}
                  setIsLoggedIn={setIsLoggedIn}
                />
              }
            />
            <Route path="/signup" element={<Signup />} />
          </Route>

          <Route
            path="/notes"
            element={
              <NotesPage
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                token={token}
                user={user}
                setToken={setToken}
                sort={sort}
                setSort={setSort}
              />
            }
          />

          <Route path="/logout" element={<LogoutPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3000,
          }}
        />
      </Suspense>
    </ThemeProvider>
  );
};
