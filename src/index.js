import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import state from './redux/state';
import {addPost} from './redux/state'
addPost()




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App
      Posts={state.profilePage.Posts}
      Dialogs={state.dialogsPage.Dialogs}
      Messages={state.dialogsPage.Messages}/>
    </BrowserRouter >
  </React.StrictMode>,
 
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App Dialogs = {Dialogs} Messages={Messages} Posts = {Posts} />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// );


// ReactDOM.render(
//   <React.StrictMode>
//     <App Posts={State.state.Posts} Dialogs={State.state.Dialogs} Messages={State.state.Messages}/>
//   </React.StrictMode>,
//   document.getElementById("root")


// );
