import React from 'react';
import '../assets/styles/Nav.css';
import {Button, Droplist} from '.';

export const Nav = () => {
  return (
    <nav className='nav-container'>
      <div className='navbar'>
        <span className='brand'>
          <span className='brand' style={{ color: 'var(--primary-color)' }}>
            FOOT
          </span>
          STATS.COM
        </span>
        <form action='/search' method='post'>
          <input type='text' name='key' id='key' className='search-bar' />
        </form>
        <Button>Iniciar Sesión</Button>
        <Droplist title='Ligas'></Droplist>
        <Droplist title='Equipos'></Droplist>
      </div>
    </nav>
  );
};
