import React from "react";
import s from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = () => {
  const postsData = [
    { id: 1, post: "Hello", likesCount: 12 },
    { id: 2, post: "How are you", likesCount: 13 },
    { id: 3, post: "I am fine", likesCount: 13 },
    { id: 4, post: "And you?", likesCount: 14 },
  ];
  return (
    <div className={s.posts}>
      <h2>my post</h2>
      <div>
        <textarea></textarea> <br />
        <button>Add post</button>
      </div>
      <div className={s.posts_block}>
        {postsData.map((post) => (
          <Post message={post.post} key={post.id} count={post.likesCount}/>
        ))}
      </div>
    </div>
  );
};
