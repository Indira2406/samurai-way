import React from 'react';
import s from '../Dialogs.module.css';

interface P {
  message: string;
}
export function Message({message}: P) {
  return (
    <div className={s.message}>{message}</div>
  );
};

export default Message;