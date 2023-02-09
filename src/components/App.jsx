import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy } from 'react';
import { HomePage } from 'pages/HomePage';
import { useState, useEffect } from 'react';
import { Signup } from 'components/Signup/Signup';
import { Login } from 'components/Login/Login';
import { Toaster } from 'react-hot-toast';
import { checkCurrentUser } from 'utils/operations';

const NotesPage = lazy(() => import('pages/NotesPage'));

export const App = () => {
  const savedToken = JSON.parse(localStorage.getItem('token'));
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(savedToken ?? null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  useEffect(() => {
    checkCurrentUser(savedToken)
      .then(data => {
        if (data) {
          setUser(data.name)
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
        position="top-center"
        toastOptions={{
          duration: 3000,
        }}
      />
    </>
  );
};
