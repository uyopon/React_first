import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {


    
    return (

        <div >
            <ProfileInfo/>


            <MyPosts Posts = {props.Posts} addpost = {props.addpost}/>



                
        </div>
    )
}



export default Profile;