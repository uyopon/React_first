import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import updateNewMessageTextActionCretor from '../../redux/state'
import addMessgeActionCreator from '../../redux/state'

const Dialogs = (props) => {
    
    // let store = props.store.getstate().dialogsPage
    
    let newMessageElement = React.createRef(); //CREATE REF

    // let addMessage = () => {
    //     let text = newMessageElement.current.value;
    //     alert(text)}

    let dialogsElement = props.Dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let messagesElement = props.Messages.map(m => <Message message={m.message} id={m.id} />)

    let newMessageBody = props.newMessageBody

    let onsendmessageclick = () => {
        props.dispatch(addMessgeActionCreator())
    }
    let onPostChange = () => {
        let body = newMessageElement.current.value;
        let action = updateNewMessageTextActionCretor(body)
        props.dispatch(action)
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
                        value = {newMessageBody} //IS COMING
                        onChange = {onPostChange}
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
