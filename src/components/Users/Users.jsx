import React from 'react';
import s from './Users.module.css'

let Users = (props) => {
    if (props.users.length===0){
    props.setUsersAC([
    { id: 1, followed: true, fullName: 'Dima', status: 'I am a boss', location: { city: 'Minsk', country: 'Belarus' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 2, followed: true, fullName: 'Andrey', status: 'I am happy', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 3, followed: false, fullName: 'Sveta', status: '...', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 4, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 5, followed: false, fullName: 'Viktor', status: '', location: { city: 'Kiev', country: 'Ucraine' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 6, followed: false, fullName: 'Valera', status: '', location: { city: 'Moscow', country: 'Russia' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 7, followed: true, fullName: 'Danil', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 8, followed: false, fullName: 'Elena', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 9, followed: true, fullName: 'Sasha', status: '', location: { city: 'Kiev', country: 'Ucraine' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 10, followed: false, fullName: 'Evgen', status: 'Good day', location: { city: 'Moscow', country: 'Russia' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    { id: 11, followed: true, fullName: 'Sasha', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 12, followed: true, fullName: 'Nastya', status: '', location: { city: 'Moscow', country: 'Russia' },photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg' },
    { id: 13, followed: true, fullName: 'Vadim', status: '', location: { city: 'Minsk', country: 'Belarus' } ,photo :'https://drasler.ru/wp-content/uploads/2019/05/%D0%9C%D1%83%D0%B6%D1%81%D0%BA%D0%B0%D1%8F-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D0%B0-%D0%B1%D0%B5%D0%B7-%D0%BB%D0%B8%D1%86%D0%B0-%D0%BA%D1%80%D1%83%D1%82%D1%8B%D0%B5-%D1%84%D0%BE%D1%82%D0%BE-028.jpg'},
    
    ])
}
    return (
        <div className={s.container} >
            {props.users.map(u => <div key ={u.id}>
                <span>
                    <div><img className={s.ava} src={u.photo}></img></div>
                    <div>
                        {u.followed? <button onClick={()=>{props.unfollow(u.id)}}>unfollow</button>:<button onClick={()=>{props.follow(u.id)}} >follow</button> }
                       
                    </div>

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



