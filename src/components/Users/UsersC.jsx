import React from 'react';
import s from './Users.module.css'
import * as axios from 'axios'
import ava from '../../assets/img/ava.png'

class Users extends React.Component {
    componentDidMount(){
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setUsersAC(response.data.items)
        })
    }
    render() {
        //pageSize: 5
        //totalUsersCount: 20
        let pagesCount = Math.ceil(this.props.totalUsersCount/ this.props.pageSize) //console.log(pagesCount) = 4
        let pages = []
        for(let i=1; i<=pagesCount;i++ ){ //
            pages.push(i)
        }
        //console.log(pages) = [1, 2, 3, 4]
        return (
            
            
            <div className={s.container} >
                <div>
                    {pages.map(p => <span className={this.props.currentPage === p && s.selectedPage} onClick= {()=> {this.props.setCurrentPage(p)}}>{p} </span>)}

                </div>

                {this.props.users.map(u => <div key={u.id}>
                    <span>
                        <div><img className={s.ava} src={u.photos.small != null ? photos.small : ava}></img></div>
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