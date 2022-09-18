import React from 'react';
import s from './Post.module.css';

interface Props {
    message: string;
}
export const Post = ({message}: Props) => {
    return (
        <div className={s.post}>
            <img src='https://avatars.mds.yandex.net/get-kino-vod-films-gallery/28788/47e2fd514411e18b76af786d7417062d/100x64_3' />
            {message}
            <div>like</div>
        </div>
    );
};

