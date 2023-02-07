import { Routes, Route, Navigate } from 'react-router-dom';
// import { lazy } from 'react';
// import { PrivateRoute } from './PrivateRoute';
// import { RestrictedRoute } from './RestrictedRoute';
// import { HomePage } from 'pages/HomePage';
import { NotesPage } from 'pages/NotesPage';
// const NotesPage = lazy(() => import('pages/NotesPage'));

export const App = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<NotesPage />} />
       
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};
