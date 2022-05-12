let store = {
    _state :{
        profilePage: {
            Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
            { id: 2, message: 'hello everybody', LikesCount: 0 },
            { id: 3, message: 'my name is john', LikesCount: 1 },
            { id: 4, message: 'I am  here', LikesCount: 8 }],
        newPostsText : ''
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
            },},

    getstate(){
        return this._state    //THIS
    },
    
    _callSubscriber : 228,

    addpost  () { 
        let newPost = {
            id: 5,
            message: this._state.profilePage.newPostsText,
            LikesCount: 5};
        this._state.profilePage.Posts.push(newPost)
        this._state.profilePage.newPostsText = ''
        this._callSubscriber(this._state) },

    updateNewPostText (newText) { 
        this._state.profilePage.newPostsText = newText
        this._callSubscriber(this._state) },

    subscribe (observer) {
        this._callSubscribere = observer ///НАБЛЮДАТЕЛЬ (ПАТТЕРН)-СПРОСЯТ НА СОБЕСЕДОВАНИИ
    }
}


export default store


