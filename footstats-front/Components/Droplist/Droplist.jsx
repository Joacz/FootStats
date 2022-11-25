import React, {useState} from 'react'
import './Droplist.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

const  = [
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

  export const Droplist = ( {title} ) => {

  const [droplist, setDroplist] = useState (false);

  const abrirCerrarDroplist = () => {
    setDroplist(!droplist);
  }

  return (
  <div>
    <div onClick = {() => {abrirCerrarDroplist()}} className='droplist'>
      <span className = 'droplist-title'>
        {title}
        <ChevronDownIcon className='droplist-icon' width={20} />
      </span>
    </div>
    <div>
      <h1 className= {droplist ? 'list' : 'noList'}>
        hola
      </h1>
    </div>
  </div>
  )
}



export default Droplist;