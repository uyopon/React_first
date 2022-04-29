import React from 'react';
import s from './MyPosts.module.css'
import Post from './Post/Post'




const MyPosts = (props) => {



<<<<<<< HEAD
    let postsElements = props.Posts.map(d => <Post id={d.id} message={d.message} LikesCount={d.LikesCount} />)
    
    let newPostElement =React.createRef();

    let addPost=()=>{
        let text = newPostElement.current.value;
        alert(text)
    }
=======
let postsElements = props.Posts.map(  d =>  <Post id={d.id} message={d.message} LikesCount={d.LikesCount} />  )
>>>>>>> f324d2e0af2c04f5b0299667ebfaa579972534fb




    return (


        <div className={s.padding}>
            <textarea name="Type" id="" cols="50" rows="5" className={s.margin_left} ref={newPostElement} ></textarea>


            <div className={s.margin_left} >
                <button onClick={addPost}>add post</button>
            </div>


            <div className={s.border}>
                my posts
                <div >
                    new posts
                </div>
            </div>

            <div >
                {postsElements}


            </div>
        </div>
    )
}

export default MyPosts;