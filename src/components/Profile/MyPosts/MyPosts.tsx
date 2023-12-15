import React from "react";
import s from "./MyPosts.module.css";
import { MyPostsPropsType } from "./MyPostsContainer";
import { Post } from "./Post/Post";


export const MyPosts = (props: MyPostsPropsType) => {
  const postsData = props.posts.map((p) => (
    <Post message={p.post} key={p.id} count={p.likesCount} />
  ));

  let newPostElement = React.createRef<HTMLTextAreaElement>();

  const addNewPost = () => {
    props.addNewPost();
    // dispatch({ type: "ADD-POST" });
    // dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: "" });
  };

  const onPostChange = () => {
    if (newPostElement.current) {
      const text = newPostElement.current.value;
      props.onPostChange(text);
      //     dispatch({ type: "UPDATE-NEW-POST-TEXT", newText: text });
    }
  };

  return (
    <div className={s.posts}>
      <h2>my post</h2>
      <div>
        <textarea
          value={props.newPostText}
          onChange={onPostChange}
          ref={newPostElement}
        />{" "}
        <br />
        <button onClick={addNewPost}>Add post</button>
      </div>
      <div className={s.posts_block}>{postsData}</div>
    </div>
  );
};
