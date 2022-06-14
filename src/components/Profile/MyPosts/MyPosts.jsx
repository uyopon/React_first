import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCretor } from '../../../redux/profilePage_reducer';

import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {



    let postsElements = props.Posts.map(d => <Post id={d.id} message={d.message} LikesCount={d.LikesCount} />)

    let newPostElement = React.createRef();



    let addPost = () => {
        props.addPost()
     }





    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text)
    }





    return (
        <div className={s.padding}>

            <textarea name="Type" id="" cols="50" rows="5" //------------------------------------------------------TEXT-AREA
                className={s.margin_left}
                ref={newPostElement}
                value={props.newPostsText}
                onChange={onPostChange}></textarea>

            <div className={s.margin_left} >
                <button onClick={addPost}>add post</button>
            </div>

            <div className={s.border}>
                my posts
                <div >
                    new posts
                </div>
            </div>

            <div >
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;