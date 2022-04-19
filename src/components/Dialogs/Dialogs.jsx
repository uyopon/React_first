import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'



//-----------------------------КОМПОНЕНТА МЕНЯЮЩАЯ URL----------------------------------------
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




//--------------------DATA FOR ARRAYS THAT 

const Dialogs = (props) => {
    let DialogsData = [
        { id: 1, name: 'Dima' },
        { id: 2, name: 'Andrey' },
        { id: 3, name: 'Sveta' },
        { id: 4, name: 'Sasha' },
        { id: 5, name: 'Viktor' },
        { id: 6, name: 'Valera' },
    ]
    let MessagesData = [
        { id: 1, message: 'hi' },
        { id: 2, message: 'how are you' },
        { id: 3, message: 'yo' },
        { id: 4, message: 'hi' },
        { id: 5, message: 'hi Viktor' },]




//CREATING OF ARRAYS THAT

    let dialogsElement = DialogsData.map(d => { <DialogItem name={d.name} id={d.id} /> })
{/* <DialogItem name={DialogsData[0].name} id={DialogsData[0].id} />
    <DialogItem name={DialogsData[1].name} id={DialogsData[1].id} />
    <DialogItem name={DialogsData[2].name} id={DialogsData[2].id} />
    <DialogItem name={DialogsData[3].name} id={DialogsData[3].id} />
    <DialogItem name={DialogsData[4].name} id={DialogsData[4].id} />
    <DialogItem name={DialogsData[5].name} id={DialogsData[5].id} /> */}

    let messagesElement = MessagesData.map(m => { <Message message={m.message} id={m.id} /> })
{/* <Message message={MessagesData[0].message} id={MessagesData[0].id} />
    <Message message={MessagesData[1].message} id={MessagesData[1].id} />
    <Message message={MessagesData[2].message} id={MessagesData[2].id} />
    <Message message={MessagesData[3].message} id={MessagesData[3].id} />
    <Message message={MessagesData[4].message} id={MessagesData[4].id} /> */}
   




    


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>

            {dialogsElement}

            </div>
            <div className={s.messages}>

                { messagesElement}


            </div>
        </div>
    )
}




export default Dialogs;
