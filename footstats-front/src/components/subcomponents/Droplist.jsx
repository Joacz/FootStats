import React from 'react';
import '../../assets/styles/Droplist.css';
import { ChevronDownIcon } from '@heroicons/react/outline';

export const Droplist = (props) => {
  return (
    <div>
      <span>{props.title}<ChevronDownIcon width={20} /></span>
    </div>
  )
}
