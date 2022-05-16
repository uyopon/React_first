const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const profilePage_reducer = (state, action) => {
    console.log(state)
    if (action.type === ADD_POST) {
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


export default profilePage_reducer