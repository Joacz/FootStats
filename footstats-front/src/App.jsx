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
import { Footer, Nav } from './components';
import Proyecto from './pages/proyecto';

const App = () => {
  const titles = ['Sobre nosotros', 'Sobre la página', 'Desarrolladores'];

  const links = [
    {
      title: titles[0],
      values: [
        {
          href: '/sobre-nosotros',
          title: 'Aprende más',
        },
        {
          href: '/contactar',
          title: 'Contactar',
        },
        {
          href: 'https://discord.gg/T3DRmSF3BT',
          title: 'Únete al equipo',
        },
      ],
    },
    {
      title: titles[1],
      values: [
        {
          href: '/proyecto',
          title: 'Proyecto',
        },
        {
          href: 'https://github.com/Joacz/FootStats',
          title: 'Repositorio',
        },
      ],
    },

    {
      title: titles[2],
      values: [
        {
          href: '/api',
          title: 'API Pública',
        },
        {
          href: 'https://github.com/',
          title: 'Github del equipo',
        },
        {
          href: 'https://github.com/Joacz/FootStats/tree/main/footstats-front',
          title: 'Código fuente',
        },
      ],
    },
  ];

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
      <Nav />
      <RouterProvider router={router} />
      <Footer links={links} titles={titles} />
    </div>
  );
};

export default App;
