import React from 'react';
import Button from './Button/Button';
import Droplist from './Droplist/Droplist';

const App = function () {
  return (
    <div className='App'>
      <Button
      numButton = '0'
      text = 'button0'
      />
      <Button
      numButton = '1'
      text = 'button1'
      />
      <Droplist
      title = 'hola'
      />
   
    </div>
  );
};

export default App;
