import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {


    
    return (

        <div >
            <ProfileInfo/>


            <MyPostsContainer 
             profilePage_reducer = {props.profilePage_reducer} dispatch = {props.dispatch}/>



                
        </div>
    )
}



export default Profile;