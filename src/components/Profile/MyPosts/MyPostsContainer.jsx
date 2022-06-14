import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCretor } from '../../../redux/profilePage_reducer';
import MyPosts from './MyPosts';



const MyPostsContainer = (props) => {



    let addPost = () => {
       
        props.dispatch(addPostActionCreator())
    }




    let onPostChange = (text) => {
        props.dispatch(updateNewPostTextActionCretor(text))
    } 

  

    

    return (<MyPosts updateNewPostText={onPostChange} addPost= {addPost} Posts = {props.profilePage_reducer.Posts}/>)
}

export default MyPostsContainer