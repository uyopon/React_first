import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { addpost } from './redux/state'



export let rerenderEntireTree = (props) => {
  


  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          Posts={props.profilePage.Posts}
          Dialogs={props.dialogsPage.Dialogs}
          Messages={props.dialogsPage.Messages}
          addpost={addpost} />
      </BrowserRouter >
    </React.StrictMode>,

    document.getElementById("root")
  );
}




reportWebVitals();


