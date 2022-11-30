import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
} from "./pages";
import { Footer, Nav } from "./components";
import Proyecto from "./pages/proyecto";

const App = () => {
  const titles = ["Sobre nosotros", "Sobre la página", "Desarrolladores"];

  const links = [
    {
      title: titles[0],
      values: [
        {
          href: "/sobre-nosotros",
          title: "Aprende más",
        },
        {
          href: "/contactar",
          title: "Contactar",
        },
        {
          href: "https://discord.gg/T3DRmSF3BT",
          title: "Únete al equipo",
        },
      ],
    },
    {
      title: titles[1],
      values: [
        {
          href: "/proyecto",
          title: "Proyecto",
        },
        {
          href: "https://github.com/Joacz/FootStats",
          title: "Repositorio",
        },
      ],
    },

    {
      title: titles[2],
      values: [
        {
          href: "/api",
          title: "API Pública",
        },
        {
          href: "https://github.com/",
          title: "Github del equipo",
        },
        {
          href: "https://github.com/Joacz/FootStats/tree/main/footstats-front",
          title: "Código fuente",
        },
      ],
    },
  ];

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/partidos" element={<Partidos />} />
          <Route path="/equipo:id" element={<Equipo />} />
          <Route path="/liga:id" element={<Liga />} />
          <Route path="/partido:id" element={<Partido />} />
          <Route path="/buscar:id" element={<Buscar />} />
          <Route path="/about" element={<About />} />
          <Route path="/proyecto" element={<Proyecto />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer links={links} titles={titles} />
      </BrowserRouter>
    </div>
  );
};

export default App;
