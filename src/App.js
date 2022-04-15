import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'


const app = () => {
    return (
        <BrowserRouter>
        <div className='app-wrapper'>
            <Header />
            <Nav />
            
            <div className='app-wrapper-content'>
                <Route path='/dialogs' component={Dialogs}/>
                <Route path='/profile' component={Profile}/> 
            
            
            </div> 

        </div>
        </BrowserRouter>
    )
}

export default app;



