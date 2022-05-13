let store = {
    _state: {
        profilePage: {
            Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
            { id: 2, message: 'hello everybody', LikesCount: 0 },
            { id: 3, message: 'my name is john', LikesCount: 1 },
            { id: 4, message: 'I am  here', LikesCount: 8 }],
            newPostsText: ''
        },
        dialogsPage: {
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



    getstate() {
        return this._state    //THIS
    },
    subscribe(observer) {
        this._callSubscriber = observer ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
    },





    dispatch(action) {
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostsText,
                LikesCount: 5
            };
            this._state.profilePage.Posts.push(newPost)
            this._state.profilePage.newPostsText = ''
            this._callSubscriber(this._state)
        }
        else if(action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostsText = action.newText
            this._callSubscriber(this._state)

        }

    },





}




export default store


