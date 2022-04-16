import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {
    return (

        <div>


            <div className={s.border}>
                my posts
                <div >
                    new posts
                </div>
            </div>

            <div >
                <Post message='Hi gays' LikesCount = '2'/>
                <Post message='hello everybody' LikesCount = '0'/>
                <Post message='my name is john' LikesCount = '1'/>
                <Post message='I am  here' LikesCount = '8'/>
            </div>
        </div>
    )
}
export default MyPosts;