import React, { useState } from 'react';
import '../../assets/styles/Footer.css';

export const Footer = ({ titles, links }) => {
  return (
    <div className='footer'>
      <div className='container-links-footer'>
        {titles.map((title) => {
          return (
            <div key={title} className='footer-link'>
              <span>{title}</span>
              {links.map((link) => {
                if (title == link.title) {
                  return link.values.map((value) => {
                    return (
                      <a key={value.title} href={value.href}>
                        {value.title}
                      </a>
                    );
                  });
                }
              })}
            </div>
          );
        })}
      </div>
      <span className='copyright'>
        © (nombre del grupo) | Derechos Reservados 2022 | Github: (url del
        github del grupo)
      </span>
    </div>
  );
};
