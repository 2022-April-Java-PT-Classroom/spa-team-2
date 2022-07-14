import { NavLink } from 'react-router-dom';
import React from 'react';
import style from './style.module.scss';

const Header = () => {

    return (
        <div>
        <div className={style.title}>
                <h1>Welcome To Jac Mysteries</h1>
                </div>
        <div className={style.header}>
            
            <ul className={style.navList}>
                <NavLink to={'/'}>Home </NavLink>
                <NavLink to={'/about'}>About </NavLink>
                <NavLink to={'/mystery'}>Mysteries </NavLink>
                <NavLink to={'/contact'}> Contact</NavLink>
                {/* <NavLink to={'/comment'}> Review/Comment</NavLink> */}
            </ul>
            </div>
            </div>
    )
}

export default Header;