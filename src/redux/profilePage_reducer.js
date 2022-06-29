const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    newPostsText: '',
    Posts: [{ id: 1, message: 'Hi guys', LikesCount: 2 },
    { id: 2, message: 'hello everybody', LikesCount: 0 },
    { id: 3, message: 'my name is john', LikesCount: 1 },
    { id: 4, message: 'I am  here', LikesCount: 8 }],
    profile: null
    
}

const profilePage_reducer = (state = initialState, action) => {
    
   

    switch (action.type) {
        case UPDATE_NEW_POST_TEXT: {
            return {...state, newPostsText: action.newText }
        }

        case ADD_POST: {
            if (state.newPostsText === '') { return state } //=))
            return {
                ...state,
                Posts: [
                    ...state.Posts,
                    {
                        id: 5,
                        message: state.newPostsText,
                        LikesCount: 5
                    }],
                newPostsText: '',
            }
        }
        case SET_USER_PROFILE: {
            console.log(action.profile) 
            //объ пришел=)
            return {...state,profile: action.profile}

        }

        
        default:
            return state
    }



}
export const addPostActionCreator = () => {return ({ type: ADD_POST })}

export const updateNewPostTextActionCretor = (text) => {return ({ type: UPDATE_NEW_POST_TEXT, newText: text })}

export const setUserProfile = (profile) => {return ({ type: SET_USER_PROFILE ,profile: profile })}

export default profilePage_reducer
