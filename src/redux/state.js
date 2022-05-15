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
            newMessageBody: '228', //АКТУАЛЬНОЕ ЗНАЧЕНИЕ В  TEXT-AREA
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
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostsText,
                LikesCount: 5
            };
            this._state.profilePage.Posts.push(newPost)
            this._state.profilePage.newPostsText = ''
            this._callSubscriber(this._state)
        }
        else if(action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostsText = action.newText
            this._callSubscriber(this._state)
        }





        else if (action.type === UPDATE_NEW_MESSAGE_TEXT ){
            this._state.dialogsPage.newMessageBody = action.body
            this._callSubscriber(this._state)
        }
        else if (action.type === SEND_MESSAGE ){
            let body = this._state.dialogsPage.newMessageBody
            this._state.dialogsPage.newMessageBody = ''
            this._state.dialogsPage.newMessageBody.push( { id: 6, message: body })
            
            this._callSubscriber(this._state)
        }
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


