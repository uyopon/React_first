import React from 'react';
import s from './MyPosts.module.css'

const MyPosts = () => {
    return (

        <div>


            <div>
                my posts
                <div>
                    new posts
                </div>
            </div>

            <div className={s.posts}>
                <div className={s.item}>post1</div>
                <div className={s.item}>post2</div>
                <div className={s.item}>post3</div>
                <div className={s.item}>post4</div>
                <div className={s.item}>post5</div>
            </div>
        </div>
    )
}
export default MyPosts;