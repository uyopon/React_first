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
          newPostsText = {state.profilePage.newPostsText}  //newPostsText : ''
          Posts={state.profilePage.Posts}  //POSTS = ПОСТЫ В STATE ПЕРЕДАННЫЕ В Ф ВО ВРЕМЯ ВЫЗОВА
          Dialogs={state.dialogsPage.Dialogs}
          Messages={state.dialogsPage.Messages}
          dispatch={store.dispatch.bind(store)}
          newMessageBody = {state.dialogsPage.newMessageBody}
          store = {store}
/>
      </BrowserRouter >
    </React.StrictMode>,

    document.getElementById("root")
  );
}

// store.getstate()

rerenderEntireTree(store.getstate())

store.subscribe(rerenderEntireTree)



reportWebVitals();//Инструмент для обнаружения потенциальных проблем в приложении