import React from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import Message from "./Message/Message";

export const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" },
  ];
  const messageData = [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your IT-Kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ];
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>
        {dialogsData.map((dialogs) => (
          <DialogItem name={dialogs.name} id={dialogs.id} key={dialogs.id} />
        ))}
      </div>
      <div className={s.messages}>
        {messageData.map((message) => (
          <Message message={message.message} key={message.id}/>
        ))}
      </div>
    </div>
  );
};
