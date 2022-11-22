import React from 'react';
import '../../assets/styles/Button.css';

export const Button = ( { value }, {href}) => {
  return (
    <div className='button'>
      <a href={href}>
        {value}
      </a>
    </div>
  );
};
