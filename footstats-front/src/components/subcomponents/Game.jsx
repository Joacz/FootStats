import React from 'react';
import '../../assets/styles/Game.css';

export const Game = ({ e1, e2 }) => {
  return (
    <div className='game'>
      <a href='/partido/id'>
        <span>{e1}</span> <span>vs</span> <span>{e2}</span>
      </a>
    </div>
  );
};
