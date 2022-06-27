import React from 'react';
import s from './Users.module.css'
import ava from '../../assets/img/ava.png'
import {NavLink} from 'react-router-dom'

let Users = (props)=> {
    let pagesCount = Math.ceil(props.totalUsersCount/ props.pageSize)//props.pageSize =100 . 19633/100 = 197

    let pages = []// номера страниц (1-197)
    for(let i=1; i<=pagesCount;i++ ){ //
        pages.push(i)
    }
    return (
        <div className={s.container} >
            <div>
                {pages.map(p => <span className={props.currentPage === p && s.selectedPage} onClick ={()=> {props.onPageChanged(p)} } >{p} </span>)}

            </div>

            {props.users.map(u => <div key={u.id}>
                <span>
                
                    <div>
                        <NavLink to  = '/Profile' activeClassName={s.active}><img className={s.ava} src={u.photos.small != null ? u.photos.small : ava}></img></NavLink>
                    </div> 

                    <div>
                        {u.followed ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { props.follow(u.id) }} >follow</button>}

                    </div>

                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>

                    </span>
                    <span>
                        {/* <div>{u.location.city}</div> */}
                        {/* <div>{u.location.country}</div> */}
                    </span>

                </span>

            </div>)}
        </div>

    )



}
export default Users