import {combineReducers, legacy_createStore as createStore} from "redux";

import profilePage_reducer from "./profilePage_reducer";
import dialogsPage_reducer from "./dialogsPage_reducer"

let reducers = combineReducers({
    dialogsPage_reducer: dialogsPage_reducer,
    profilePage_reducer: profilePage_reducer
})
let store = createStore(reducers)

export default store;

window.store=store






// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux
// import App from '..App'
// import  createStore  from 'redux'
// let store = createStore()
// const root = ReactDOM.createRoot(document.getElementById("root"))
// ReactDOM.render(
//       // Render a `<Provider>` around the entire `<App>`,
//   // and pass the Redux store to as a prop
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById('root')
// )