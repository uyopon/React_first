import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = () => {
    let Posts =[
        {id:1,message:'Hi guys',LikesCount:2},
        {id:2,message:'hello everybody',LikesCount:0},
        {id:3,message:'my name is john',LikesCount:1},
        {id:4,message:'I am  here',LikesCount:8}]

    return (

        <div >
            <ProfileInfo/>

            <MyPosts Posts = {Posts} />
                
        </div>
    )
}
export default Profile;