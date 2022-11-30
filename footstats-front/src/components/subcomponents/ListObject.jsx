import React from 'react'
import { ArrowRightIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

export const ListObject = ({title, teamId}) => {
  return (
    <NavLink to={`/equipo/${teamId}`}>
      <ArrowRightIcon className='arrow' width={12} />
      <li>{title}</li>
    </NavLink>
  );
}
