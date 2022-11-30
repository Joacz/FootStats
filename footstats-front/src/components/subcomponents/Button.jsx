import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../assets/styles/Button.css';

export const Button = (props) => {
  return (
    <div className='button'>
      <NavLink to='/login'>
        {props.children}
      </NavLink>
    </div>
  );
};
