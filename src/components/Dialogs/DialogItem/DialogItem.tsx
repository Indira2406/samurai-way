import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

interface P {
  name: string;
  id: number;
}
export function DialogItem({name, id}: P){
  return (
    <div className={s.dialog + ' ' + s.active}>
      <NavLink to={`/dialogs/${id}`}>{name}</NavLink>
    </div>
  );
};

