import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'

const MyPosts = () => {

    let PostData =[
        {id:1,message:'Hi guys',LikesCount:2},
        {id:2,message:'hello everybody',LikesCount:0},
        {id:3,message:'my name is john',LikesCount:1},
        {id:4,message:'I am  here',LikesCount:8},
    ]


    return (

        <div className={s.padding}>

            <div className={s.border}>
                my posts
                <div >
                    new posts
                </div>
            </div>

            <div >
                <Post message={PostData[0].message} id={PostData[0].id} LikesCount = {PostData[0].LikesCount}/>
                <Post message={PostData[1].message} id={PostData[1].id} LikesCount = {PostData[1].LikesCount}/>
                <Post message ={PostData[2].message} id={PostData[2].id} LikesCount = {PostData[2].LikesCount}/>
                <Post message = {PostData[3].message} id={PostData[3].id} LikesCount = {PostData[3].LikesCount}/>
            </div>
        </div>
    )
}
export default MyPosts;
