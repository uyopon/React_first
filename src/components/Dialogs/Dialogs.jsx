import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                <div className={s.item + ' ' + s.active}>
                    <NavLink to="/dialogs/1">Dima</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/2">Andrey</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/3">Sveta</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/4">Sasha</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/5">Viktor</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/dialogs/6">Valera</NavLink>
                </div>

            </div>
            <div className={s.messages}>
                <div className={s.message}>hi</div>
                <div className={s.message}>how are you</div>
                <div className={s.message}>hello hello</div>

            </div>
        </div>


    )

}



export default Dialogs;
