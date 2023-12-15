import React, { ChangeEvent } from "react";
import s from "./Dialogs.module.css";
import { DialogItem } from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import { DialogsContainerPropsType } from "./DialogsContainer";


export const Dialogs = (props: DialogsContainerPropsType) => {
  let dialogElements = props.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} key={d.id} />
  ));

  let messagesData = props.messages.map((m) => (
    <Message message={m.message} key={m.id} />
  ));

  let onSendMessageClick = () => {
    props.onSendMessageClick();
  };
  let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let body = e.currentTarget.value;
    props.onNewMessageChange(body);
  };
  return (
    <div className={s.dialogs}>
      <div className={s.dialogs_items}>{dialogElements}</div>
      <div className={s.messages}>{messagesData}</div>
      <div>
        <div>
          <textarea
            value={props.newMessageBody}
            onChange={onNewMessageChange}
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div>
          <button onClick={onSendMessageClick}>Send</button>
        </div>
      </div>
    </div>
  );
};
