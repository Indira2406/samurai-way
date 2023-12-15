import { ActionsTypes, DialogsPageType } from "./store";

let initialState = {
  dialogs: [
    { id: 1, name: "Dimych" },
    { id: 2, name: "Andrey" },
    { id: 3, name: "Sveta" },
    { id: 4, name: "Victor" },
    { id: 5, name: "Valera" },
  ],
  messages: [
    { id: 1, message: "Hi" },
    { id: 2, message: "How is your IT-Kamasutra?" },
    { id: 3, message: "Yo" },
    { id: 4, message: "Yo" },
    { id: 5, message: "Yo" },
  ],
  newMessageBody: "",
};

export const dialogsReducer = (
  state: DialogsPageType = initialState,
  action: ActionsTypes
) => {
  switch (action.type) {
    case "UPDATE-NEW-MESSAGE-BODY":
      return { ...state, newMessageBody: action.body };
    case "SEND-MESSAGE":
      return {
        ...state,
        messages: [...state.messages, { id: 8, message: state.newMessageBody }],
        newMessageBody: "",
      };
    default:
      return state;
  }
};

export type DialogsActionsTypes =
  | ReturnType<typeof updateNewMessageBodyAC>
  | ReturnType<typeof sendMessageAC>;

export const updateNewMessageBodyAC = (body: string) => {
  return {
    type: "UPDATE-NEW-MESSAGE-BODY",
    body: body,
  } as const;
};

export const sendMessageAC = () => {
  return {
    type: "SEND-MESSAGE",
  } as const;
};
