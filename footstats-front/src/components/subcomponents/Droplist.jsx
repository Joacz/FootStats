import React from 'react';
import '../../assets/styles/Droplist.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

export const Droplist = (props) => {
  return (
    <div className='droplist'>
      <span className='droplist-title'>{props.title}<ChevronDownIcon className='droplist-icon' width={20} /></span>
    </div>
  )
}
