import React, { useState, useEffect } from 'react';
import '../assets/styles/Nav.css';
import { Button, Droplist } from '.';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';

export const Nav = () => {
  const [responsive, setResponsive] = useState(false);
  const [lists, setLists] = useState([]);
  // Esto solo va a trabajar con la lista num. 1
  const [display, setDisplay] = useState(false);

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

  useEffect(() => {
    setLists(['list-1', 'list-2']);
  }, []);

  return (
    <nav className='nav-container'>
      <div className='navbar navbar-desktop'>
        <a className='brand' style={{ cursor: 'pointer' }} href='/'>
          FOOTSTATS
        </a>

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
          <Droplist
            lists={lists}
            id={0}
            title='Ligas'
          ></Droplist>
          <Droplist
            lists={lists}
            id={1}
            title='Equipos'
          ></Droplist>
          <a href='/partidos'>Partidos</a>
          <Button
          title = 'Iniciar Sesión'
          href = '/Login'
          className = 'button'
          />
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

          <a href='/partidos'>Partidos</a>
          <a href='/ligas'>Ligas</a>
          <a href='/equipos'>Equipos</a>
          <Button
          title = 'Iniciar Sesión'
          href = '/Login'
          className = 'button'
          />
        </div>
      </div>
    </nav>
  );
};
