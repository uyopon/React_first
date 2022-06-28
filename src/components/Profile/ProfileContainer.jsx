import React from 'react';
import Profile from './Profile'
import * as axios from 'axios'
import { connect } from 'react-redux'
import { setUserProfile } from '../../redux/profilePage_reducer';


class ProfileContainer extends React.Component {
    //задача контейнерной компоненты- быть оберткой дл презентационной компоненты
    //зарезервированное слово. метод жизненного цикла. все side effect делаются тут
    //методы жизненного цикла -  методы которые есть у объекта которы создан при помощи этого класса
    //перевод- компонента вмонтированна
    //сначала рендерим jsx потм жден пока придут данные с сервера и только когда пришли переотрисовываем компоненту
    componentDidMount(){

        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {//response = отклик, реакция,ответ
            this.props.setUserProfile(response.data)
           
  
        })
    }
    
    render (){
        return(
            <Profile {...this.props} profile = {this.props.profile}/>
        )
        }   
        
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage_reducer.profile

    }
}
let mapDispatchtoProps = (dispatch) => {
    return {
        setUserProfile:(profile) => {
            dispatch(setUserProfile(profile))

        }

    }
}

export default connect (mapStateToProps, mapDispatchtoProps)(ProfileContainer)


