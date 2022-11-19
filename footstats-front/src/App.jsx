import React from 'react'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import { Home, Login, Register, Buscar, Equipo, Liga, Partido, Partidos } from './pages'

export const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: 'partidos',
      element: <Partidos />
    },
    {
      path: 'equipo/:id',
      element: <Equipo />
    },
    {
      path: 'liga/:id',
      element: <Liga />
    },
    {
      path: 'partido/:id',
      element: <Partido />
    },
    {
      path: 'buscar/:id',
      element: <Buscar />
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}
