import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import StoreContext from './StoreContex'

let rerenderEntireTree = (state) => { //функция которую вызывают для rerender (переотрисовки и передают ей актуальный state)

  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <StoreContext.Provider value = {store}>
          <App
            // profilePage_reducer={state.profilePage_reducer}
            // dialogsPage_reducer={state.dialogsPage_reducer}
            // dispatch={store.dispatch.bind(store)}




          // newPostsText = {state.profilePage.newPostsText}  
          // Posts={state.profilePage.Posts}  
          // Dialogs={state.dialogsPage.Dialogs}
          // Messages={state.dialogsPage.Messages}
          // dispatch={store.dispatch.bind(store)}
          // newMessageBody = {state.dialogsPage.newMessageBody} 
          />
        </StoreContext.Provider>
      </BrowserRouter >
    </React.StrictMode>,

    document.getElementById("root")
  );
}

rerenderEntireTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderEntireTree(state)
})

reportWebVitals();//Инструмент для обнаружения потенциальных проблем в приложении