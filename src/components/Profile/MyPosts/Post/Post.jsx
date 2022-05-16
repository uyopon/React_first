import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (



    


        <div className={s.item}>
            <img src="https://i.pinimg.com/474x/74/05/5f/74055f83bfbdc20fdc1f9d1fc116fd26.jpg" alt="" className={s.icon} />
            
            {props.message}
            
            

            <div>
                <span>like </span>{props.LikesCount}
            </div>
        </div>


    )
}
export default Post;