import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <a href='src/components/Navbar/Navbar#'>Profile</a>
                </li>
                <li className={s.item}>
                    <a href='src/components/Navbar/Navbar#'>Messages</a>
                </li>
                <li className={s.item}>
                    <a href='src/components/Navbar/Navbar#'>News</a>
                </li>
                <li className={s.item}>
                    <a href='src/components/Navbar/Navbar#'>Music</a>
                </li>
            </ul>
        </nav>
    );
};

