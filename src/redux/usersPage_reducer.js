const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'

let initialState = {
    newPostsText: '',
    Users: [{ id: 1, followed: true, fullName: 'Dima', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 2, followed: true, fullName: 'Andrey', status: 'I am happy', location: { city: 'Moscow', country: 'Russia' } },
    { id: 3, followed: false, fullName: 'Sveta', status: '...', location: { city: 'Moscow', country: 'Russia' } },
    { id: 4, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' } },
    { id: 5, followed: false, fullName: 'Viktor', status: '', location: { city: 'Kiev', country: 'Ucraine' } },
    { id: 6, followed: false, fullName: 'Valera', status: '', location: { city: 'Moscow', country: 'Russia' } },
    { id: 7, followed: true, fullName: 'Danil', status: '', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 8, followed: false, fullName: 'Elena', status: '', location: { city: 'Minsk', country: 'Belarus' } },
    { id: 9, followed: true, fullName: 'Sasha', status: '', location: { city: 'Kiev', country: 'Ucraine' } },
    { id: 10, followed: false, fullName: 'Evgen', status: 'Good day', location: { city: 'Moscow', country: 'Russia' } },
    { id: 11, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' } },
    { id: 12, followed: true, fullName: 'Nastya', status: '', location: { city: 'Moscow', country: 'Russia' } },
    { id: 13, followed: true, fullName: 'Vadim', status: '', location: { city: 'Minsk', country: 'Belarus' } },
    ],
}

const users_reducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:{
            return  {
                ...state, Users: state.Users.map(u => { if (u.id === action.userID) { return  {...u, followed: true }}return u})

}
        }


        case UNFOLLOW: {
    return {...state, Users: state.Users.map(u => { if (u.id === action.userID) { return  {...u, followed: false }}return u})}
}

        default:
return state
    }

}


export const followAC = () => {
    return (
        { type: FOLLOW, userID }
    )
}

export const unfollowAC = (userID) => {
    return (
        { type: UNFOLLOW, userID }
    )
}

export default users_reducer