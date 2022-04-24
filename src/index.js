import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom'




  let Dialogs = [
    { id: 1, name: 'Dima' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },]

let Messages = [
    { id: 1, message: 'hi' },
    { id: 2, message: 'how are you' },
    { id: 3, message: 'yo' },
    { id: 4, message: 'hi' },
    { id: 5, message: 'hi Viktor' },]

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App Dialogs = {Dialogs} Messages={Messages}/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
