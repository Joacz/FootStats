import React from 'react';
import './Button.css';

const listButton = [
{
  texto: 'button0',
  href: 'https://reactnative.dev/docs/button',
  clase: 'button0'
},
{
  texto: 'button1',
  href: 'https://es.fiverr.com/',
  clase: 'button1'
}
]
const Button = ( {numButton, text} ) => {
  return (
    <div className = {listButton[numButton].clase}>
      <a href = {listButton[numButton].href}>
        {text}
      </a>
    </div>
  );
};
export default Button;