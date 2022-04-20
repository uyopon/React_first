import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



const DialogItem = (props) => {
    let path = "/Dialogs/" + props.id;
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}




const Message = (props) => {
    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )
}




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



    let dialogsElement = Dialogs.map(      (d) =>  <DialogItem name={d.name} id={d.id} />       )
    

    let messagesElement = Messages.map(       (m) =>  <Message message={m.message} id={m.id} />       )


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {/* <DialogItem name={Dialogs[0].name} id={Dialogs[0].id} />
                <DialogItem name={Dialogs[1].name} id={Dialogs[1].id} />
                <DialogItem name={Dialogs[2].name} id={Dialogs[2].id} />
                <DialogItem name={Dialogs[3].name} id={Dialogs[3].id} />
                <DialogItem name={Dialogs[4].name} id={Dialogs[4].id} />
                <DialogItem name={Dialogs[5].name} id={Dialogs[5].id} />  */}


                {dialogsElement}

            </div>
            <div className={s.messages}>
                {/* <Message message={Messages[0].message} id={Messages[0].id} />
                <Message message={Messages[1].message} id={Messages[1].id} />
                <Message message={Messages[2].message} id={Messages[2].id} />
                <Message message={Messages[3].message} id={Messages[3].id} />
                <Message message={Messages[4].message} id={Messages[4].id} />  */}

                {messagesElement}


            </div>
        </div>
    )
}




export default Dialogs;
