import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { checkCurrentUser } from 'utils/operations';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'utils/theme';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('components/Login/Login'));
const Signup = lazy(() => import('components/Signup/Signup'));
const NotesPage = lazy(() => import('pages/NotesPage'));
const LogoutPage = lazy(() => import('pages/LogoutPage'));
const VerifyConfirmPage = lazy(() => import('pages/VerifyConfirmPage'));

const startData = { token: null, sort: 'sortByCreatedUp' };
const savedData = JSON.parse(localStorage.getItem('mynotes'));

export const App = () => {
  const [data, setData] = useState(savedData ?? startData);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(data.token);
  const [sort, setSort] = useState('sortByCreatedUp');
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
      <Routes>
        <Route
          path="/"
          element={
            <SharedLayout
              user={user}
              setIsLoggedIn={setIsLoggedIn}
              setToken={setToken}
              isLoggedIn={isLoggedIn}
            />
          }
        >
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
          
          <Route path="/verify/:token" element={<VerifyConfirmPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
    </ThemeProvider>
  );
};
