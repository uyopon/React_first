const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'


let initialState =  {
    newPostsText: '',
    Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
    { id: 2, message: 'hello everybody', LikesCount: 0 },
    { id: 3, message: 'my name is john', LikesCount: 1 },
    { id: 4, message: 'I am  here', LikesCount: 8 }],
}

const profilePage_reducer = (state = initialState , action) => {
    
    if (action.type === ADD_POST) {
        if(state.newPostsText === ''){return state} //=)
        let newPost = {
            id: 5,
            message: state.newPostsText,
            LikesCount: 5
        };
        state.Posts.push(newPost)
        state.newPostsText = ''

    }
    else if (action.type === UPDATE_NEW_POST_TEXT) {
        state.newPostsText = action.newText

    }
    return state

}
export const addPostActionCreator = () => {
    return (
        { type: ADD_POST }
    )
}

export const updateNewPostTextActionCretor = (text) => {
    return (
        { type: UPDATE_NEW_POST_TEXT, newText: text }
    )
}

export default profilePage_reducer
