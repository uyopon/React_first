import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header'
import Nav from './components/Nav/Nav'
import Profile from './components/Profile/Profile'
import Music from './components/Music/Music';
import News from './components/News/News'
import Settings from './components/settings/settings'

const app = (props) => {
    let Posts =[
        {id:1,message:'Hi guys',LikesCount:2},
        {id:2,message:'hello everybody',LikesCount:0},
        {id:3,message:'my name is john',LikesCount:1},
        {id:4,message:'I am  here',LikesCount:8}]

    return (

        <div className='app-wrapper'>
            <Header />
            <Nav />
            
            <div className='app-wrapper-content'>
                <Routes>

                    <Route path='/' element={<Profile />} /> 
                    <Route path='dialogs/*' element={<Dialogs Dialogs ={props.Dialogs} Messages ={props.Messages }  />} />
                    <Route path='profile/' element={<Profile Posts = {Posts}/>} />
                    <Route path='Music/' element={<Music />} />
                    <Route path='News/' element={<News />} />
                    <Route path='Settings/' element={<Settings />} /> 

                    
                </Routes> 
               


            </div>

        </div>

    )
}

export default app;



