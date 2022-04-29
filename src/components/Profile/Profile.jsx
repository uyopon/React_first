import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


<<<<<<< HEAD
const Profile = (props) => {

=======
const Profile = () => {
    let Posts =[
        {id:1,message:'Hi guys',LikesCount:2},
        {id:2,message:'hello everybody',LikesCount:0},
        {id:3,message:'my name is john',LikesCount:1},
        {id:4,message:'I am  here',LikesCount:8}]
>>>>>>> f324d2e0af2c04f5b0299667ebfaa579972534fb

    return (

        <div >
            <ProfileInfo/>

<<<<<<< HEAD
            <MyPosts Posts = {props.Posts} />
=======
            <MyPosts Posts = {Posts} />
>>>>>>> f324d2e0af2c04f5b0299667ebfaa579972534fb
                
        </div>
    )
}
export default Profile;