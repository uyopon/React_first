import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
// import state from './redux/state';
import {addPost} from './redux/state'


//ЭТОЙ ФАЙЛ НУЖЕН ТОЛЬКО ДЛЯ ТОГО ЧТОБЫ СОДЕРЖАТЬ ФУНКЦИЮ rerenderEntireTree КОТОРАЯ ОТРИСОВЫВАЕТ DOM TREE,
//ФУНКЦИЯ ПРИНИМАЕТ АРГУМЕНТ state (БЕЗ PROPS???)-
//STATE = ОБЪЕКТ КОТОРЫЙ ХРАНИТ В СЕБЕ ВСЕ ДАННЫЕ







export let rerenderEntireTree = (state) =>{



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <App
      Posts={state.profilePage.Posts}
      Dialogs={state.dialogsPage.Dialogs}
      Messages={state.dialogsPage.Messages}
      addPost ={addPost}     
      />
    </BrowserRouter >
  </React.StrictMode>,
 
  document.getElementById("root")
);
}





reportWebVitals();


