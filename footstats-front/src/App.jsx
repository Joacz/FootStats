import React from 'react';
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import {
  Home,
  Login,
  Register,
  Buscar,
  Equipo,
  Liga,
  Partido,
  Partidos,
  About,
  Contact,
} from './pages';
import Proyecto from './pages/proyecto';

const App = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
    {
      path: 'partidos',
      element: <Partidos />,
    },
    {
      path: 'equipo/:id',
      element: <Equipo />,
    },
    {
      path: 'liga/:id',
      element: <Liga />,
    },
    {
      path: 'partido/:id',
      element: <Partido />,
    },
    {
      path: 'buscar/:id',
      element: <Buscar />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'proyecto',
      element: <Proyecto />,
    },
    {
      path: 'contact',
      element: <Contact />,
    },
  ]);

  return (
    <div className='App'>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
