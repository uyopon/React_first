import React from 'react';
import Users from './Users';
import { connect } from 'react-redux'


let mapStateToProps = (state) => {
    return {
        Users: state.usersPage_reducer.Users
    }
}
let mapDispatchtoProps = (dispatch) => {

    return {
        onPostChange: (text) => {
            dispatch(updateNewMessageTextActionCretor(text))
        },
        onsendmessageclick: () => {
            dispatch(addMessgeActionCreator())
        }
    }
}

const usersContainer = connect (mapStateToProps, mapDispatchtoProps)(Users)

export default  usersContainer;