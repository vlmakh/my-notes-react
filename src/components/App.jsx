import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
import { HomePage } from 'pages/HomePage';
import { NotesPage } from 'pages/NotesPage';
import { useState } from 'react';
import { Signup } from 'components/Signup/Signup';
import { Login } from 'components/Login/Login';
import { Toaster } from 'react-hot-toast';


export const App = () => {
  const savedToken = JSON.parse(localStorage.getItem('token'))
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(savedToken ?? null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const [isCheckingLogin, setIsCheckingLogin] = useState(false);

  return (
    <>
    <Routes>
      <Route
        path="/"
        element={
          <HomePage
            isLoggedIn={isLoggedIn}
            
            
          />
        }
      >
        <Route index element={<Login user={user}
            setUser={setUser}
            token={token}
            setToken={setToken} setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="notes" element={<NotesPage isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} user={user} setToken={setToken} />} />

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
