import React from 'react';
import s from './Post.module.css'

const Post = (props) => {
    return (






        <div className={s.item}>
            <img src="https://pm1.narvii.com/6883/d2058cac129dc90a3d6e3903889b401b29d13c45r1-515-414v2_128.jpg" alt="" className={s.icon} />

            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>


    )
}
export default Post;