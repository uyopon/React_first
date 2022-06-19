const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

let initialState = {
    newPostsText: '',
    Users: [{ id: 1, followed: true, fullName: 'Dima', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 2, followed: true, fullName: 'Andrey', status: 'I am happy', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 3, followed: false, fullName: 'Sveta', status: '...', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 4, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 5, followed: false, fullName: 'Viktor', status: '', location: { city: 'Kiev', country: 'Ucraine' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 6, followed: false, fullName: 'Valera', status: '', location: { city: 'Moscow', country: 'Russia' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 7, followed: true, fullName: 'Danil', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 8, followed: false, fullName: 'Elena', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 9, followed: true, fullName: 'Sasha', status: '', location: { city: 'Kiev', country: 'Ucraine' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 10, followed: false, fullName: 'Evgen', status: 'Good day', location: { city: 'Moscow', country: 'Russia' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 11, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 12, followed: true, fullName: 'Nastya', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 13, followed: true, fullName: 'Vadim', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    ],
}

const usersPage_reducer = (state = initialState, action) => {


    switch (action.type) {

        case FOLLOW:{
            return  {
                ...state, Users: state.Users.map(u => { if (u.id === action.userID) { return  {...u, followed: true }}return u})

}
        }


        case UNFOLLOW: {
    return {
        ...state, Users: state.Users.map(u => { if (u.id === action.userID) { return  {...u, followed: false }}return u})
}
}       
        case(SET_USERS):{
            return {...state,users: [...state.Users, ...action.users]}
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


export const setUsersAC = (users) => {
    return (
        { type: SET_USERS, users }
    )
}

export default usersPage_reducer