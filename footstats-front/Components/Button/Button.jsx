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
const Button = ( {id, title} ) => {
  return (
    <div className = {listButton[id].clase}>
      <a href = {listButton[id].href}>
      {title}
      </a>
    </div>
  );
};
export default Button;