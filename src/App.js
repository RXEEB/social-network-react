import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from './components/Users/usersContainer'
import ProfileContainer from "./components/Profile/ProfileContainer";
import Test from "./components/Test/Test";

import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/authorization/login";




const App = () => {

    return (

            <div className='app-wrapper'>
                <HeaderContainer />

                <div className='app-wrapper-content'>
                    <Route path='/dialogs'
                           render={ () => <DialogsContainer /> }/>

                    <Route path='/profile/:userId?'
                           render={ () => <ProfileContainer /> }/>
                    <Route path='/users'
                           render={ () => <UsersContainer/> }/>
                    <Route path='/login'
                           render={ () => <Login/> }/>
                    <Route path='/test'
                           render={ () => <Test/> }/>
                </div>

            </div>

        )
}

export default App;