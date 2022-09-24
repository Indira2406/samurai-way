import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import Message from './Message/Message';

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        <DialogItem name='Dimych' id={1}/>
        <DialogItem name='Andrey' id={2}/>
        <DialogItem name='Sveta' id={3}/>
        <DialogItem name='Victor' id={4}/>
        <DialogItem name='Valera' id={5}/>
      </div>
      <div className={s.messages}>
        <Message message='Hi'/>
        <Message message='How is your IT-Kamasutra?'/>
        <Message message='Yo'/>
      </div>
    </div>
  );
};

