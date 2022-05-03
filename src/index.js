import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { rerenderEntireTree } from './render';
import state from './redux/state';
// import state from './redux/state';
// import {addPost} from './redux/state'

//----------?????-----------------
reportWebVitals();
//----------?????-----------------





rerenderEntireTree(state)


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//     <App
//       Posts={state.profilePage.Posts}
//       Dialogs={state.dialogsPage.Dialogs}
//       Messages={state.dialogsPage.Messages}
//       addPost ={addPost}     
//       />
//     </BrowserRouter >
//   </React.StrictMode>,
 
//   document.getElementById("root")
// );


// reportWebVitals();