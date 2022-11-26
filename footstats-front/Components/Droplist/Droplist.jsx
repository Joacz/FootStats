import React, {useState} from 'react'
import './Droplist.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

const items = [
  {  datos:[
    <li>liga1</li>,
    <li>liga2</li>,
    <li>liga3</li>
] 
  },
  {  datos:[
    <li>equipo1</li>,
    <li>equipo2</li>,
    <li>equipo3</li>,
    <li>equipo3</li>
] 
  }

];

export const Droplist = ( { id, title } ) => {



const [droplist, setDroplist] = useState (false);

const abrirCerrarDroplist = () => {
setDroplist(!droplist);
}



return (

  <div>

    <div onClick = {() => {abrirCerrarDroplist()}} className='droplist'>
      <span className = 'droplist-title'>
        <ChevronDownIcon className='droplist-icon' width={20} />
        {title}
      </span>
    </div>



    <div>
      <div className = {droplist ? 'list' : 'noList'}>
       {items[id].datos}
      </div>
    </div>  

  </div>
  )
}

export default Droplist;