import React from 'react';
import { Nav, Card, Game, ListObject } from '../components';
import '../assets/styles/Home.css';

export const Home = () => {
  return (
    <main className='home'>
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
        <div className='stats-container'>
          <div className='games-container'>
            <h2>Partidos recientes:</h2>
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />{' '}
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
            <Game e1={'Barcelona'} e2={'Real Madrid'} />
          </div>
          <div className='leagues-container'>
            <h2>Ligas:</h2>
            <ul className='leagues'>
              <div className='list'>
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
              </div>
              <div className='list'>
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
                <ListObject title={'La Liga'} teamId={1} />
              </div>
            </ul>
            <h2>Equipos Populares:</h2>
            <ul className='leagues'>
              <div className='list'>
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
              </div>
              <div className='list'>
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
                <ListObject title={'Barcelona'} teamId={1} />
              </div>
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};
