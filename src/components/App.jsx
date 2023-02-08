import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { HomePage } from 'pages/HomePage';
import { NotesPage } from 'pages/NotesPage';
import { useState, useEffect } from 'react';
import { Signup } from 'components/Signup/Signup';
import { Login } from 'components/Login/Login';
import { Toaster } from 'react-hot-toast';
import { checkCurrentUser } from 'utils/operations';

export const App = () => {
  const savedToken = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(savedToken ?? null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isCheckingLogin, setIsCheckingLogin] = useState(false);

  useEffect(() => {
    checkCurrentUser(savedToken)
      .then(data => {
        // console.log(data);
        if (data) {
          setIsLoggedIn(true);
          return;
        }
        setIsLoggedIn(false);
      })
      .catch(error => {
        console.log(error.message);
      });
  });

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              isLoggedIn={isLoggedIn}
              token={token}
              setIsLoggedIn={setIsLoggedIn}
            />
          }
        >
          <Route
            index
            element={
              <Login
                user={user}
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
          path="notes"
          element={
            <NotesPage
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              token={token}
              user={user}
              setToken={setToken}
            />
          }
        />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};
