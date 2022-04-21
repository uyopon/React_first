import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {


    let Dialogs = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ];

    let Messages = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'hi' },
        { id: 5, message: 'hi Viktor' },];



    let dialogsElement = Dialogs.map(      d =>  <DialogItem name={d.name} id={d.id} />       )




    let messagesElement = Messages.map(       m =>  <Message message={m.message} id={m.id} />       )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>


                {dialogsElement}

            </div>
            <div className={s.messages}>


                {messagesElement}


            </div>
        </div>
    )
}



export default Dialogs;
