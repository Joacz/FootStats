import React from 'react';
import '../../assets/styles/Button.css';

export const Button = (props) => {
  return (
    <div className={props.className}>
      <a href={props.href}>
        {props.title}
      </a>
    </div>
  );
};
