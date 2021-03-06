import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessgeActionCreator, updateNewMessageTextActionCretor } from '../../redux/dialogsPage_reducer';


const Dialogs = (props) => {
    console.log(props)

    let newMessageElement = React.createRef(); //CREATE REF

    let dialogsElement = props.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.Messages.map(m => <Message message={m.message} id={m.id} />)


    let onsendmessageclick = () => {
        props.onsendmessageclick()
    }

    let onPostChange = () => {
        let text = newMessageElement.current.value;
        props.onPostChange(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogs_items}>
                {dialogsElement}
            </div>
            <div className={s.messages}>

                <div>{messagesElement}</div>
                <div>
                    <textarea
                        className={s.margin_left}
                        ref={newMessageElement}
                        value={props.newMessageBody} //IS COMING
                        onChange={onPostChange}
                    ></textarea>
                    <div className={s.margin_left} >
                        <button
                            onClick={onsendmessageclick}
                        >send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;
