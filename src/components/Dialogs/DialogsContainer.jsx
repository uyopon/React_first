import React from 'react';
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addMessgeActionCreator, updateNewMessageTextActionCretor } from '../../redux/dialogsPage_reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux'

// const DialogsContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let onsendmessageclick = () => {
//                     store.dispatch(addMessgeActionCreator())
//                 }
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewMessageTextActionCretor(text))
//                 }
//                 return (<Dialogs onsendmessageclick={onsendmessageclick} onPostChange={onPostChange}
//                     newMessageBody={store.getState().dialogsPage_reducer.newMessageBody}
//                     Dialogs={store.getState().dialogsPage_reducer.Dialogs}
//                     Messages={store.getState().dialogsPage_reducer.Messages} />)
//             }
//         }</StoreContext.Consumer>
//     )

// }

let mapStateToProps = (state) => {
    return {
        Dialogs: state.dialogsPage_reducer.Dialogs,
        Messages: state.dialogsPage_reducer.Messages,
        newMessageBody: state.dialogsPage_reducer.newMessageBody 
    }
}
let mapDispatchtoProps = (dispatch) => {

    return {
        onPostChange: (text) => {
            dispatch(updateNewMessageTextActionCretor(text))
        },
        onsendmessageclick: () => {
            dispatch(addMessgeActionCreator())
        }
    }
}

const SuperDialogsContainer = connect(mapStateToProps, mapDispatchtoProps)(Dialogs)//Dialogs-презентационнная компонента вокруг которой созд-
//аем контаинерную компоненту
export default SuperDialogsContainer;










//Messages = {props.dialogsPage_reducer.Messages}  = сообщения которые отрисовывает компонента
//Dialogs = {props.dialogsPage_reducer.Dialogs} = имена которые отрисовывает компонента
//newMessageBody = {props.dialogsPage_reducer.newMessageBody} = актуальное значение в text-area

//onsendmessageclick = {onsendmessageclick} = добавляет сообщ при нажатии
//onPostChange = {onPostChange} = диспатчит text from text-area

