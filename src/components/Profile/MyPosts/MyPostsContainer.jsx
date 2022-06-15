import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCretor } from '../../../redux/profilePage_reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux'

let mapStateToProps = (state) => {
    console.log(state)
    return {
        Posts: state.profilePage_reducer.Posts,
        newPostsText: state.profilePage_reducer.newPostsText
    }
}
let mapDispatchtoProps = (dispatch) => {

    return {
        onPostChange: (text) => {
            dispatch(updateNewPostTextActionCretor(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

const SuperMyPostsContainer = connect(mapStateToProps, mapDispatchtoProps)(MyPosts)
export default SuperMyPostsContainer


// const MyPostsContainer = () => {
//     return (
//         <StoreContext.Consumer>{
//             (store) => {
//                 let state = store.getState()
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }          
//                 let onPostChange = (text) => {
//                     store.dispatch(updateNewPostTextActionCretor(text))}
//                 return( <MyPosts 
//                 updateNewPostText={onPostChange}
//                 addPost={addPost} 
//                 Posts={store.getState().profilePage_reducer.Posts}
//                 newPostsText={store.getState().profilePage_reducer.newPostsText} 
//                 />)}

//         }</StoreContext.Consumer>)}












//newPostsText = {props.profilePage_reducer.newPostsText = actually value from text-area
//Posts = {props.profilePage_reducer.Posts} = те постые которые отрисовывают компоненты

//addPost= {addPost} = функция  добавляет пост

//updateNewPostText={onPostChange} = берет аклуьальное значение из text area  и присваетвает его в newPostsText