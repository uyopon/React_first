import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = () => {

    let Posts =[
        {id:1,message:'Hi guys',LikesCount:2},
        {id:2,message:'hello everybody',LikesCount:0},
        {id:3,message:'my name is john',LikesCount:1},
        {id:4,message:'I am  here',LikesCount:8}]

    let postsElements = Posts.map(      d =>  <Post id={d.id} message={d.message} LikesCount={d.LikesCount} />       )




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