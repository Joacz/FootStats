import React from 'react';
import { Nav, Card } from '../components';
import '../assets/styles/Home.css';

export const Home = () => {
  return (
    <main className='home'>
      <Nav />
      <div className='container-home'>
        <div className='title-container'>
          <h1 className='title'>FOOTSTATS.COM</h1>
          <p>Estadísticas de Futbol de todo el mundo, en un solo lugar.</p>
        </div>
        <div className='home__card-container'>
          <Card
            title={'Todos los datos de tus equipos'}
            content='Entérese de todos los partidos, torneos y victorias de los equipos que sigues. ¡Registrate hoy con tu correo electrónico!'
          />
          <Card
            title={'Estadísticas de los partidos'}
            content='Contamos con todas las estadísticas de los partidos más recientes. Goles, pases, posesión y más'
          />
          <Card
            title={'Equipos y selecciones'}
            content='También tenemos las estadísticas de los torneos internacionales, fechas de los partidos, resultados y más'
          />
        </div>
      </div>
    </main>
  );
};
