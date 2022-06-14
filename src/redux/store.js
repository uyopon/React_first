import dialogsPage_reducer from "./dialogsPage_reducer"
import profilePage_reducer from "./profilePage_reducer"
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
            newMessageBody: '', 
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
    _callSubscriber() { },   

    // let state = store.getState()
    // rerenderEntireTree(state)

    
    getState() {
        return this._state
         
    },
    subscribe(observer) {    //OBSERVER =rerenderEntireTree
        this._callSubscriber = observer    ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
    },

    dispatch(action) {
        
        this._state.profilePage = profilePage_reducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsPage_reducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    },
}

export default store


