import React from 'react';
import './App.css';
import Button from './Button/Button';
import Droplist from './Droplist/Droplist';

const App = function () {
  return (
    <div className='App'>
      <Button
      id = '0'
      title = 'Botón0'
      />
       <Button
      id = '1'
      title = 'Botón1'
      />
      <Droplist
      id = '0'
      title = 'Ligas'
      />
       <Droplist
      id = '1'
      title = 'Equipos'
      />
    </div>
  );
};

export default App;
