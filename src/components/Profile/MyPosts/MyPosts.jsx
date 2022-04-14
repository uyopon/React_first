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
                <Post message='Glory  to Ucraine'/>
                <Post message='Russia shit '/>
                <Post message='I am the boss here'/>
            </div>
        </div>
    )
}
export default MyPosts;