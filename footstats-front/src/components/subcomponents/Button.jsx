import React from 'react';
import '../../assets/styles/Button.css';

export const Button = (props) => {
  return (
    <a href='/login' className='button'>
      {props.children}
    </a>
  );
};
