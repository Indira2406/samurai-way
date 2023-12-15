import { connect } from "react-redux";
import { Dispatch } from "redux";
import { addPostAC, updateNewTextAC } from "../../redux/profileReducer";
import { AppStateType } from "../../redux/redux-store";
import { PostsPropsType } from "../../redux/store";
import { MyPosts } from "./MyPosts";


type MyPostsMapStatePropsType = {
  posts: PostsPropsType[],
  newPostText: string
}

type MyPostsMapDispatchPropsType = {
  addNewPost: () => void
  onPostChange: (text: string) => void
}

export type MyPostsPropsType = MyPostsMapStatePropsType & MyPostsMapDispatchPropsType;

let mapStateToProps = (state: AppStateType): MyPostsMapStatePropsType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText

  };
};
let mapDispatchToProps = (dispatch: Dispatch): MyPostsMapDispatchPropsType => {
  return {
    addNewPost: () => {
      dispatch(addPostAC());
      dispatch(updateNewTextAC(''));
    },

    onPostChange: (text: string) => {
      dispatch(updateNewTextAC(text));
    },
  };
};
export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);


