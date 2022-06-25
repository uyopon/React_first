import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import ava from '../../assets/img/ava.png'

class Users extends React.Component {
    // Users: [],
    // pageSize:100,
    // totalUsersCount: 0,
    // currentPage: 1,

    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setUsersAC(response.data.items)//пользователи
            this.props.setTotalUsersCountAC(response.data.totalCount)//кол-во всех пользователей
            debugger

        })
    }  
    onPageChanged=(pageNumber)=>{ 
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setUsersAC(response.data.items)
        })
    }
    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize)//this.props.pageSize =100

        let pages = []
        for(let i=1; i<=pagesCount;i++ ){ //
            pages.push(i)
        }
        
        return (
            <div className={s.container} >
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p && s.selectedPage} onClick ={()=> {this.onPageChanged(p)} } >{p} </span>)}

                </div>

                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={s.ava} src={u.photos.small != null ? u.photos.small : ava}></img></div> 
                        <div>
                            {u.followed ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button> : <button onClick={() => { this.props.follow(u.id) }} >follow</button>}

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

}


export default Users