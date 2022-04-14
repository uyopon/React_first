import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (

        <div>


            <div>
                my posts
                <div>
                    new posts
                </div>
            </div>

            <div className={s.posts}>
                <Post message='Hi gays'/>
                <Post message='hello everybody/'>
                <Post message='my name is john '/>
                <Post message='I am  here'/>
            </div>
        </div>
    )
}
export default MyPosts;