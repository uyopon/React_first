import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
   
    return (
        <div className={s.container} >
            {props.users.map(u => <div key ={u.id}>
                <span>
                    <div><img className={s.ava} src={u.photo}></img></div>
                    <div><button>follow</button></div>

                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        <div>{u.location.city}</div>
                        <div>{u.location.country}</div>

                    </span>

                </span>








            </div>)}
            



        </div>

    )
 
}
export default Users



//  <span>
//     <div>
//         <img src={u.photo}></img>
//     </div>
//     <div>
//         <button>follow</button>
//     </div>

// </span>
// <span>
//     <span>
//         <div>{u.fullName}</div>
//         <div>{u.status}</div>

//     </span>
//     <span>
//         <div>{u.location.city}</div>
//         <div>{u.location.country}</div>
//     </span>

// </span>

// </div>



// let Users = (props) => {
//     return (
//         <div className={s.boss}>
//             props.Users.map(u => <div>boss</div>)
            



//         </div>

//     )
 
// }
// export default Users



