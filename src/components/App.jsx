import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { checkCurrentUser } from 'utils/operations';
import { ThemeProvider } from 'theme-ui';
import { theme } from 'utils/theme';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Modal } from 'components/Modal/Modal';
import { Warn } from './Warn/Warn';

const HomePage = lazy(() => import('pages/HomePage'));
const Login = lazy(() => import('components/Login/Login'));
const Signup = lazy(() => import('components/Signup/Signup'));
const NotesPage = lazy(() => import('pages/NotesPage'));
const LogoutPage = lazy(() => import('pages/LogoutPage'));
const VerifyConfirmPage = lazy(() => import('pages/VerifyConfirmPage'));
const VerifyRepeatPage = lazy(() => import('pages/VerifyRepeatPage'));
const UserPage = lazy(() => import('pages/UserPage'));


const startData = { token: null, sort: 'sortByCreatedUp', warn: false };
const savedData = JSON.parse(localStorage.getItem('mynotes'));

export const App = () => {

  const [data, setData] = useState(savedData ?? startData);
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [token, setToken] = useState(data.token);
  const [sort, setSort] = useState(data.sort);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [warn, setWarn] = useState(data.warn);
  
  const agreeWarn = () => {
    setWarn(true);
  };

  useEffect(() => {
    checkCurrentUser(token)
      .then(data => {
        setUser(data.name);
        setEmail(data.email);
        setIsLoggedIn(true);
      })
      .catch(error => {});
  });

  useEffect(() => {
    setData({ token, sort, warn });
  }, [sort, token, warn]);

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
                token={token}
                sort={sort}
                setSort={setSort}
              />
            }
          />

          <Route path="/logout" element={<LogoutPage />} />
          
          <Route path="/verify/:token" element={<VerifyConfirmPage />} />

          <Route path="/verify" element={<VerifyRepeatPage />} />

          <Route path="/user" element={<UserPage isLoggedIn={isLoggedIn} setUser={setUser} email={email} />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>

      {!warn && (
          <Modal >
            <Warn agreeWarn={agreeWarn} />
          </Modal>
        )}

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 2000,
          
        }}
      />
    </ThemeProvider>
  );
};
