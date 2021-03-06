const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    Users: [],
    pageSize:100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
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
           
            return { ...state, Users: action.users }
            
        }

        case SET_CURRENT_PAGE:{
            return { ...state,currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT:{
            return { ...state,totalUsersCount: action.totalCount }
        }

        case TOGGLE_IS_FETCHING:{
            return { ...state,isFetching : action.isFetching }
        }


        default:
            return state
    }

}

export const followAC = (userID) => {return ({ type: FOLLOW, userID })}

export const unfollowAC = (userID) => {return ({ type: UNFOLLOW, userID })}


export const setUsersAC = (users) => {return ({ type: SET_USERS, users })}


export const setCurrentPageAC = (currentPage) => {return ({ type: SET_CURRENT_PAGE, currentPage })}

export const setUsersTotalCount = (totalCount) => {return ({ type: SET_TOTAL_USERS_COUNT, totalCount })}

export const setIsFetchingAC = (isFetching) => {return ({ type: TOGGLE_IS_FETCHING, isFetching })}

export default usersPage_reducer