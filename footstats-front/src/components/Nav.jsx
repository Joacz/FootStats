import React, { useState } from 'react';
import '../assets/styles/Nav.css';
import { Button, Droplist } from '.';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';

export const Nav = () => {
  const [responsive, setResponsive] = useState(false);
  const mobileNavAnimation = () => {
    let nav = document.getElementById('nav-mb');
    if (responsive) {
      nav.style = 'transform: translate(-100%)';
    } else {
      nav.style = 'transform: translate(0%)';
    }
  };
  
  const handleCheck = () => {
    setResponsive(!responsive);
    mobileNavAnimation();
  };

  return (
    <nav className='nav-container'>
      <div className='navbar navbar-desktop'>
        <span className='brand'>FOOTSTATS</span>

        <div className='buttons'>
          <form
            className='flex-center form-search'
            action='/search'
            method='post'
          >
            <button className='form-button flex-center' type='submit'>
              <SearchIcon className='form-search__icon' width={20} />
            </button>
            <input type='text' name='key' id='key' className='search-bar' />
          </form>
          <Droplist title='Ligas'></Droplist>
          <Droplist title='Equipos'></Droplist>
          <a href='/partidos'>Partidos</a>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>

      <MenuIcon
        className='menu-icon'
        onClick={() => handleCheck()}
        width={45}
        color='#fff'
      ></MenuIcon>

      <div id='nav-mb' className='navbar navbar-mobile'>
        <span className='brand'>FOOTSTATS</span>

        <div className='buttons'>
          <form
            className='flex-center form-search'
            action='/search'
            method='post'
          >
            <button className='form-button flex-center' type='submit'>
              <SearchIcon className='form-search__icon' width={20} />
            </button>
            <input type='text' name='key' id='key' className='search-bar' />
          </form>
          <Droplist title='Ligas'></Droplist>
          <Droplist title='Equipos'></Droplist>
          <a href='/partidos'>Partidos</a>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </nav>
  );
};
