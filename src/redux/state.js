import dialogsPage_reducer from "./dialogsPage_reducer"
import profilePage_reducer from "./profilePage_reducer"
const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT =  'UPDATE-NEW-POST-TEXT'
const SEND_MESSAGE = 'SEND-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT =  'UPDATE-NEW-MESSAGE-TEXT'     //ИСПОЛЬЗУЕМ ЭТИ КОНСТАНТЫ ЧТОБЫ НЕ ОПЕРЧАТАТЬСЯ  = )

let store = {
    _state: {
        profilePage: {
            newPostsText: '',
            Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
            { id: 2, message: 'hello everybody', LikesCount: 0 },
            { id: 3, message: 'my name is john', LikesCount: 1 },
            { id: 4, message: 'I am  here', LikesCount: 8 }],     
        },
        dialogsPage: {
            newMessageBody: '', //АКТУАЛЬНОЕ ЗНАЧЕНИЕ В  TEXT-AREA
            Dialogs: [
                { id: 1, name: 'Dima' },
                { id: 2, name: 'Andrey' },
                { id: 3, name: 'Sveta' },
                { id: 4, name: 'Sasha' },
                { id: 5, name: 'Viktor' },
                { id: 6, name: 'Valera' },],
            Messages: [
                { id: 1, message: 'hi' },
                { id: 2, message: 'how are you' },
                { id: 3, message: 'yo' },
                { id: 4, message: 'hi' },
                { id: 5, message: 'hi Viktor' },],
        },
        },
    _callSubscriber() { }, // rerenderEntireTree
    getstate() {
        return this._state    
    },
    subscribe(observer) { //OBSERVER =rerenderEntireTree
        this._callSubscriber = observer ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
    },


    dispatch(action) {
        console.log(action)
        this._state.profilePage = profilePage_reducer(this._state.profilePage, 1)
        this._state.dialogsPage = dialogsPage_reducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)

    },
}


export const addPostActionCreator = () => {
    return(
       { type: ADD_POST }
    )
}

 export const updateNewPostTextActionCretor = (text) => {
    return(
        {type: UPDATE_NEW_POST_TEXT, newText:text }
    )
}

export const addMessgeActionCreator = () => {
    return(
       { type: SEND_MESSAGE  }
    )
}

 export const updateNewMessageTextActionCretor = (text) => {
    return(
        {type: UPDATE_NEW_MESSAGE_TEXT , body: text }
    )
}

export default store


