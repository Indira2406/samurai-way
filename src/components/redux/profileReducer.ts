import { ActionsTypes, ProfilePageType } from "./store";

let initialState = {
  posts: [
    { id: 1, post: "Hello", likesCount: 12 },
    { id: 2, post: "How are you", likesCount: 13 },
    { id: 3, post: "I am fine", likesCount: 13 },
    { id: 4, post: "And you?", likesCount: 14 },
  ],
  newPostText: "it-kamasutra",
};

export const profileReducer = (
  state: ProfilePageType = initialState,
  action: ActionsTypes
) => {

  switch (action.type) {
    case "ADD-POST":
      return {
        ...state,
        posts: [
          {
            id: 10,
            post: state.newPostText,
            likesCount: 0,
          },
          ...state.posts,
        ],
      };
    case "UPDATE-NEW-POST-TEXT":
      return {...state, newPostText: action.newText};
    default:
      return state;
  }
};

export type ProfileActionsTypes =
  | ReturnType<typeof addPostAC>
  | ReturnType<typeof updateNewTextAC>;

export const addPostAC = () => {
  return {
    type: "ADD-POST",
  } as const;
};
export const updateNewTextAC = (newText: string) => {
  return {
    type: "UPDATE-NEW-POST-TEXT",
    newText: newText,
  } as const;
};
