import React from 'react';
import * as axios from 'axios'
import Users from './Users'

class UsersAPICompontnt extends React.Component {
    // Users: [],
    // pageSize:100,
    // totalUsersCount: 0,
    // currentPage: 1,
    

    componentDidMount(){ //mount = устанавливать(монтировать) amount = количество
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setUsersAC(response.data.items)//пользователи (пушит пользователей в Users)
            this.props.setTotalUsersCountAC(response.data.totalCount)//кол-во всех пользователей (присваивает число в totalUsersCount ) 19633
            debugger

        })
    }  
    onPageChanged=(pageNumber)=>{  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!11
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setUsersAC(response.data.items)
        })
    }
    render() {

        
        return (<Users totalUsersCount= {this.props.totalUsersCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage}
            users = {this.props.users} onPageChanged = {this.onPageChanged} componentDidMount ={this.componentDidMount} follow= {this.props.follow}
            unfollow= {this.props.unfollow}

        />


        )
    }

}


export default UsersAPICompontnt