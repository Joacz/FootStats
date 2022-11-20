import React from 'react';
import '../../assets/styles/Button.css';

export const Button = (props) => {
  return (
    <div className='button'>
      <a href='/login'>
        {props.children}
      </a>
    </div>
  );
};
