import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        alert(text)
    }





    let dialogsElement = props.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />)




    let messagesElement = props.Messages.map(m => <Message message={m.message} id={m.id} />)


    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>


                {dialogsElement}

            </div>
            <div className={s.messages}>



                {messagesElement}

                <textarea name="Type" id="" cols="50" rows="5" className={s.margin_left} ref={newMessageElement} ></textarea>


                <div className={s.margin_left} >
                    <button onClick={addMessage}>add message</button>
                </div>


            </div>
        </div>
    )
}



export default Dialogs;
