import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCretor } from '../../../redux/profilePage_reducer';
import StoreContext from '../../../StoreContex';
import MyPosts from './MyPosts';


const MyPostsContainer = () => {





    return (

        <StoreContext.Consumer>{

            (store) => {
                let state = store.getState()

                let addPost = () => {

                    store.dispatch(addPostActionCreator())
                }
            
            
                let onPostChange = (text) => {
                    store.dispatch(updateNewPostTextActionCretor(text))
                }
            
                return( <MyPosts 
                updateNewPostText={onPostChange}
                addPost={addPost} 
                Posts={store.getState().profilePage_reducer.Posts}
                newPostsText={store.getState().profilePage_reducer.newPostsText} 
                />
                )

            }

        }</StoreContext.Consumer>
    )

}

export default MyPostsContainer

//newPostsText = {props.profilePage_reducer.newPostsText = actually value from text-area
//Posts = {props.profilePage_reducer.Posts} = те постые которые отрисовывают компоненты

//addPost= {addPost} = функция  добавляет пост

//updateNewPostText={onPostChange} = берет аклуьальное значение из text area  и присваетвает его в newPostsText