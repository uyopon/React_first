import React from 'react';
import { NavLink } from 'react-router-dom';
import s from '../Dialogs.module.css'



const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}




export default Message;
