const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    newPostsText: '',
    Users: [],
}

const usersPage_reducer = (state = initialState, action) => {

    switch (action.type) {

        case FOLLOW: {
            return {
                ...state, Users: state.Users.map(u => { if (u.id === action.userID) { return { ...u, followed: true } } return u })

            }
        }

        case UNFOLLOW: {
            return {
                ...state, Users: state.Users.map(u => { if (u.id === action.userID) { return { ...u, followed: false } } return u })
            }
        }
        case SET_USERS: {
           
            return { ...state, Users: [...state.Users, ...action.users] }
        }

        default:
            return state
    }

}


export const followAC = (userID) => {
    console.log(userID)
    return (
        
        { type: FOLLOW, userID }
    )
}

export const unfollowAC = (userID) => {
    return (
        { type: UNFOLLOW, userID }
    )
}


export const setUsersAC = (users) => {
    return (
        { type: SET_USERS, users }
    )
}

export default usersPage_reducer