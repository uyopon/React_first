import React from 'react';
import UsersC from './UsersC';
import { connect } from 'react-redux'
import { followAC, setUsersAC, unfollowAC } from '../../redux/usersPage_reducer';


let mapStateToProps = (state) => {
    return {
        users: state.usersPage_reducer.Users
    }
}
let mapDispatchtoProps = (dispatch) => {

    return {
        follow: (id) => {
            
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsersAC:(users)=>{
            dispatch(setUsersAC(users))

        }
    }
}

const usersContainer = connect (mapStateToProps, mapDispatchtoProps)(UsersC)

export default  usersContainer;