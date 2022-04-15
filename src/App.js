import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'



const app = () => {
    return (

        <div className='app-wrapper'>
            <Header />
            <Nav />

            <div className='app-wrapper-content'>
                <Routes>
                    <Route path='/dialogs' element={<Dialogs />} />
                    <Route path='/profile' element={<Profile />} />
                </Routes>


            </div>

        </div>

    )
}

export default app;



