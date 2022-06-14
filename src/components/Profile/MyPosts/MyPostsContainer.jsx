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

  

    return (<MyPosts updateNewPostText={onPostChange} addPost= {addPost} Posts = {props.profilePage_reducer.Posts}
        newPostsText = {props.profilePage_reducer.newPostsText}/>)
        
}

export default MyPostsContainer

//newPostsText = {props.profilePage_reducer.newPostsText = actually value from text-area
//Posts = {props.profilePage_reducer.Posts} = те постые которые отрисовывают компоненты

//addPost= {addPost} = функция  добавляет пост 

//updateNewPostText={onPostChange} = берет аклуьальное значение из text area  и присваетвает его в newPostsText