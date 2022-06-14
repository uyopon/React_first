import React from 'react';
import { NavLink } from 'react-router-dom';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessgeActionCreator, updateNewMessageTextActionCretor } from '../../redux/dialogsPage_reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {
    
    


    let onsendmessageclick = () => {
        props.dispatch(addMessgeActionCreator())
    }

    let onPostChange = (text) => {
        props.dispatch(updateNewMessageTextActionCretor(text))
    }

    return (<Dialogs onsendmessageclick = {onsendmessageclick} onPostChange = {onPostChange}
         newMessageBody = {props.dialogsPage_reducer.newMessageBody} Dialogs = {props.dialogsPage_reducer.Dialogs}
         Messages = {props.dialogsPage_reducer.Messages}/>)
}

export default DialogsContainer;



// return (<MyPosts updateNewPostText={onPostChange} addPost= {addPost} Posts = {props.profilePage_reducer.Posts}
//     newPostsText = {props.profilePage_reducer.newPostsText}/>)