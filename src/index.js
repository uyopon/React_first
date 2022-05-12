import reportWebVitals from './reportWebVitals';
import store from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';



let rerenderEntireTree = (state) => { //функция которую вызывают для rerender (переотрисовки и передают ей актуальный state)
  
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          newPostsText = {store.getstate().profilePage.newPostsText}  //newPostsText : ''
          Posts={store.getstate().profilePage.Posts}  //POSTS = ПОСТЫ В STATE ПЕРЕДАННЫЕ В Ф ВО ВРЕМЯ ВЫЗОВА
          Dialogs={store.getstate().dialogsPage.Dialogs}
          Messages={store.getstate().dialogsPage.Messages}
          addpost={store.addpost}
          updateNewPostText = {store.updateNewPostText} />
      </BrowserRouter >
    </React.StrictMode>,

    document.getElementById("root")
  );
}



rerenderEntireTree(store.getstate())

store.subscribe(rerenderEntireTree)



reportWebVitals();//Инструмент для обнаружения потенциальных проблем в приложении