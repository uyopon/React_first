import React from 'react';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessgeActionCreator, updateNewMessageTextActionCretor } from '../../redux/dialogsPage_reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContex';


const DialogsContainer = () => {




    return (

        <StoreContext.Consumer>{
            (store) => {
                let onsendmessageclick = () => {
                    store.dispatch(addMessgeActionCreator())
                }
            
                let onPostChange = (text) => {
                    store.dispatch(updateNewMessageTextActionCretor(text))
                }

                return( <Dialogs onsendmessageclick={onsendmessageclick} onPostChange={onPostChange}
                    newMessageBody={store.getState().dialogsPage_reducer.newMessageBody}
                     Dialogs={store.getState().dialogsPage_reducer.Dialogs}
                    Messages={store.getState().dialogsPage_reducer.Messages} />)



            }
        }</StoreContext.Consumer>


    )

}

export default DialogsContainer;










//Messages = {props.dialogsPage_reducer.Messages}  = сообщения которые отрисовывает компонента
//Dialogs = {props.dialogsPage_reducer.Dialogs} = имена которые отрисовывает компонента
//newMessageBody = {props.dialogsPage_reducer.newMessageBody} = актуальное значение в text-area

//onsendmessageclick = {onsendmessageclick} = добавляет сообщ при нажатии
//onPostChange = {onPostChange} = диспатчит text from text-area

