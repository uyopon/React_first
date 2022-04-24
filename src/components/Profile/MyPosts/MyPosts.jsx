import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {



    let postsElements = props.Posts.map(      d =>  <Post id={d.id} message={d.message} LikesCount={d.LikesCount} />       )




    return (


        <div className={s.padding}>

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