import React from 'react';
import '../../assets/styles/Game.css';
import { NavLink } from 'react-router-dom'

export const Game = ({ e1, e2 }) => {
  return (
    <div className='game'>
      <NavLink to='/partido/id'>
        <span>{e1}</span> <span>vs</span> <span>{e2}</span>
      </NavLink>
    </div>
  );
};
