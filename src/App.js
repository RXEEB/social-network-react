import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter, Route, Switch } from 'react-router-dom'
import Dialogs from "./components/Dialogs/Dialogs";
import Profile from "./components/Profile/Profile";


 const App = (props) => {

        return (
            <div className='app-wrapper'>
                <Header/>
                <Switch>
                <Route path='/dialogs'
                       render={ () => <Dialogs store = {props.store} />

                       }/>

                <Route path='/profile'
                       render={ () => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/> }/>
                    </Switch>
            </div>
        )
    }

export default App;



