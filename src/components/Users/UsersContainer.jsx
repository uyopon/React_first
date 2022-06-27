import React from 'react';
import { connect } from 'react-redux'
import { followAC, setCurrentPageAC, setIsFetchingAC, setUsersAC, setUsersTotalCount, unfollowAC } from '../../redux/usersPage_reducer';
import Users from './Users';
import * as axios from 'axios'
import gif from '../../assets/img/gif.gif'


class UsersContainer extends React.Component {
    // Users: [],
    // pageSize:100,
    // totalUsersCount: 0,
    // currentPage: 1,
    componentDidMount(){ //mount = устанавливать(монтировать) amount = количество
        this.props.setIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetchingAC(false) 
            this.props.setUsersAC(response.data.items)//пользователи (пушит пользователей в Users)
            this.props.setTotalUsersCountAC(response.data.totalCount)//кол-во всех пользователей (присваивает число в totalUsersCount ) 19633
            debugger
        })
    }  
    onPageChanged=(pageNumber)=>{  //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        this.props.setCurrentPage(pageNumber)
        this.props.setIsFetchingAC(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            //https://social-network.samuraijs.com/api/1.0/users - вбиваем в браузер и смотрит get request  
            this.props.setIsFetchingAC(false)
            this.props.setUsersAC(response.data.items)
        })
    }
    //фейковая заглушка
    render() {
        return <>
        {this.props.isFetching? <img src={gif}/>:null}
        <Users totalUsersCount= {this.props.totalUsersCount} pageSize = {this.props.pageSize} currentPage = {this.props.currentPage}
            users = {this.props.users} onPageChanged = {this.onPageChanged} componentDidMount ={this.componentDidMount} follow= {this.props.follow}
            unfollow= {this.props.unfollow}
        />
        </>
    }
}






let mapStateToProps = (state) => {
    return {
        users: state.usersPage_reducer.Users,//!в компоненту нужно прокидывать пропсами не весь state,а только те его части которые отрисовывает компонента!
        pageSize: state.usersPage_reducer.pageSize,//потомучто если изменится весь state то переатрисуется компонента. даже если этот state не попадет в нее
        totalUsersCount: state.usersPage_reducer.totalUsersCount,
        currentPage: state.usersPage_reducer.currentPage,
        isFetching: state.usersPage_reducer.isFetching,
    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        follow: (id) => {
            
            dispatch(followAC(id))
        },
        unfollow: (id) => {
            dispatch(unfollowAC(id))
        },
        setUsersAC:(users)=>{
            dispatch(setUsersAC(users))

        },
        setCurrentPage:(pageNumber)=>{
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCountAC:(totalCount)=>{
            dispatch(setUsersTotalCount(totalCount))
        },
        setIsFetchingAC:(isFetching)=>{dispatch(setIsFetchingAC(isFetching))}
    }
}

const usersContainer = connect (mapStateToProps, mapDispatchtoProps)(UsersContainer)
//connect принимает аргументом 2 ф и вызывает их(получает objs которые return f
//эти 2 объекта склеиваются в один объ с названием props)

export default usersContainer