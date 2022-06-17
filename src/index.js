import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
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
      </Provider>
    </BrowserRouter >
  </React.StrictMode>,

  document.getElementById("root")
);



// rerenderEntireTree(store.getState())


reportWebVitals();//Инструмент для обнаружения потенциальных проблем в приложении