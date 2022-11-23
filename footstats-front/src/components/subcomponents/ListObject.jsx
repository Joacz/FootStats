import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline';

export const ListObject = ({title, teamId}) => {
  return (
    <a href={`/equipo/${teamId}`}>
      <ArrowRightIcon className='arrow' width={12} />
      <li>{title}</li>
    </a>
  );
}
