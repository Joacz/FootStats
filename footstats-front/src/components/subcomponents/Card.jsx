import React from 'react';
import '../../assets/styles/Card.css';

export const Card = ({ title, content }) => {
  return (
    <div className='card'>
      <span className='card-title'>{title}</span>
      <p>{content}</p>
    </div>
  );
};
