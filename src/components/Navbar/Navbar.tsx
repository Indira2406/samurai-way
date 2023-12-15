import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';

export const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
                </li>
                <li className={s.item}>
                    <NavLink to='/users' activeClassName={s.active}>Users</NavLink>
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

