import React, { useState } from 'react';
import '../../assets/styles/Droplist.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

export const Droplist = (props) => {
  const [show, setShow] = useState(false);

  const toggleList = () => {
    let list = document.getElementById(`list-${props.id}`);
    if (show == false) {
      list.style = 'display:flex ';
    } else {
      list.style = 'display:none ';
    }
    setShow(!show);
  };
  return (
    <div className='droplist'>
      <span className='droplist-title' onClick={() => toggleList()}>
        {props.title}
        <ChevronDownIcon className='droplist-icon' width={20} />
      </span>
      <div id={`list-${props.id}`} className='droplist-items'>
        <ul className='droplist-link' key={props.id}>{props.items}</ul>
      </div>
    </div>
  );
};
