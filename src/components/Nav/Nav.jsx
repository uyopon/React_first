import React from 'react';
import s from './Nav.module.css'
import {NavLink} from 'react-router-dom'


const Nav = () => {
    return (
        
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to  = '/Profile' className={s.elem}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/Dialogs' className={s.elem}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/News' className={s.elem}>News</NavLink>
            </div>
            <div className={s.item}> 
                <NavLink to = '/Music' className={s.elem}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to = '/Settings' className={s.elem}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Nav























