// import {combineReducers, legacy_createStore as createStore} from "redux"
import {combineReducers, legacy_createStore as createStore} from "redux"

import dialogsPage_reducer from './dialogsPage_reducer'
import profilePage_reducer from './profilePage_reducer'


let reducers = combineReducers({
    dialogsPage_reducer: dialogsPage_reducer,
    profilePage_reducer: profilePage_reducer

})

let store = legacy_createStore(reducers)


export default store