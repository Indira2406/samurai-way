import { DialogsActionsTypes, dialogsReducer } from "./dialogsReducer";
import { ProfileActionsTypes, profileReducer } from "./profileReducer";

export let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, post: "Hello", likesCount: 12 },
        { id: 2, post: "How are you", likesCount: 13 },
        { id: 3, post: "I am fine", likesCount: 13 },
        { id: 4, post: "And you?", likesCount: 14 },
      ],
      newPostText: "it-kamasutra",
    },
    dialogsPage: {
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
    },
  },
  getState() {
    return this._state;
  },

  subscribe(callback: () => void) {
    onChange = callback;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    onChange();
  },
};

let onChange = () => {
  console.log("state is changed");
};

export type StoreType = {
  _state: StatePropsType;
  subscribe: (callback: () => void) => void;
  getState: () => StatePropsType;
  dispatch: (action: ActionsTypes) => void;
};
export type DialogsPropsType = {
  id: number;
  name: string;
};
export type MessagesPropsType = {
  id: number;
  message: string;
};
export type PostsPropsType = {
  id: number;
  post: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostsPropsType[];
  newPostText: string;
};
export type DialogsPageType = {
  messages: MessagesPropsType[];
  dialogs: DialogsPropsType[];
  newMessageBody: string;
};

export type UsersPageType = {
  users: UsersPropsType[];
};

export type UsersPropsType = {
  id: number;
  name: string;
  status: string;
  location: UsersLocationType;
  followed: boolean;
  imgUrl: string;
  photos?: {
    small: string;
    large: string;
  }
};

export type UsersLocationType = {
  city: string;
  country: string;
};

export type StatePropsType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
};

export type ActionsTypes = ProfileActionsTypes | DialogsActionsTypes;
