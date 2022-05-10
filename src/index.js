import reportWebVitals from './reportWebVitals';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { addpost, updateNewPostText } from './redux/state'


let rerenderEntireTree = (state) => { //функция которую вызывают для rerender (переотрисовки и передают ей актуальный state)
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          newPostsText = {state.profilePage.newPostsText}  //newPostsText : ''
          Posts={state.profilePage.Posts}  //POSTS = ПОСТЫ В STATE ПЕРЕДАННЫЕ В Ф ВО ВРЕМЯ ВЫЗОВА
          Dialogs={state.dialogsPage.Dialogs}
          Messages={state.dialogsPage.Messages}
          addpost={addpost}
          updateNewPostText = {updateNewPostText} />
      </BrowserRouter >
    </React.StrictMode>,

    document.getElementById("root")
  );
}



rerenderEntireTree(state)

subscribe(rerenderEntireTree)



reportWebVitals();//Инструмент для обнаружения потенциальных проблем в приложении