import React from 'react';
import s from './MyPosts.module.css';
import {Post} from './Post/Post';

export const MyPosts = () => {
    return (
        <div className={s.posts}>
            <h2>my post</h2>
            <div>
                <textarea></textarea> <br />
                <button>Add post</button>
            </div>
           <div className={s.posts_block}>
             <Post message='Hello'/>
             <Post message='How are you'/>
             <Post message='I am fine'/>
             <Post message='And you?'/>
           </div>

        </div>
    );
};

