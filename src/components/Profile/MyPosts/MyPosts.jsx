import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = (props) => {

    // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!NOT DISPLAYED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    let postsElements = props.Posts.map(p => <Post message={p.message} id={p.id} LikesCount={p.LikesCount} />)

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
                {/* <Post message={PostData[0].message} id={PostData[0].id} LikesCount = {PostData[0].LikesCount}/>
                <Post message={PostData[1].message} id={PostData[1].id} LikesCount = {PostData[1].LikesCount}/>
                <Post message ={PostData[2].message} id={PostData[2].id} LikesCount = {PostData[2].LikesCount}/>
                <Post message = {PostData[3].message} id={PostData[3].id} LikesCount = {PostData[3].LikesCount}/> */}
            </div>
        </div>
    )
}
export default MyPosts;
