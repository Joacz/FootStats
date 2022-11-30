import React, { useState, useEffect } from 'react';
import '../assets/styles/Nav.css';
import { Button, Droplist } from '.';
import { SearchIcon } from '@heroicons/react/outline';
import { MenuIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';
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

  const teamsItems = [
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
    <li>
      <NavLink to='/equipo/{id}'>Manchester City</NavLink>
    </li>,
  ];

  const leaguesItems = [
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
    <li>
      <NavLink to='/liga/{id}'>Premier League</NavLink>
    </li>,
  ];

  return (
    <nav className='nav-container'>
      <div className='navbar navbar-desktop'>
        <NavLink className='brand' style={{ cursor: 'pointer' }} to='/'>
          FOOTSTATS
        </NavLink>

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
            id={1}
            items={leaguesItems}
            title='Ligas'
          ></Droplist>
          <Droplist
            lists={lists}
            id={2}
            title='Equipos'
            items={teamsItems}
          ></Droplist>
          <NavLink to='/partidos'>Partidos</NavLink>
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
        <NavLink className='brand' to='/'>FOOTSTATS</NavLink>

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

          <NavLink to='/partidos'>Partidos</NavLink>
          <NavLink to='/ligas'>Ligas</NavLink>
          <NavLink to='/equipos'>Equipos</NavLink>
          <Button>Iniciar Sesión</Button>
        </div>
      </div>
    </nav>
  );
};
