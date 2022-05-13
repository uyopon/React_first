import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'



const Profile = (props) => {


    
    return (

        <div >
            <ProfileInfo/>


            <MyPosts Posts = {props.Posts}
             newPostsText={props.newPostsText} dispatch = {props.dispatch}/>



                
        </div>
    )
}



export default Profile;