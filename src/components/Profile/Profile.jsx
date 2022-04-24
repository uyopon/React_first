import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfileInfo/ProfileInfo'


const Profile = (props) => {


    return (

        <div >
            <ProfileInfo/>

            <MyPosts Posts = {props.Posts} />
                
        </div>
    )
}
export default Profile;