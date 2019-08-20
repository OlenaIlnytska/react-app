// import React from 'react';
import React, {Component} from "react";
import './App.css';
import {Route, NavLink, Switch} from 'react-router-dom'
import AboutUs from './AboutUs/AboutUs'
import LogIn from "./LogIn/LogIn";
import img from '../src/logo.png'
import Home from './Home/Home'

class App extends Component {

    render() {
        return (
            <header>
                <div className="App">
                    <div className={'logo'}>
                        <img src={img} alt="Logo"/>
                    </div>


                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">All products</NavLink>
                            </li>
                            <li>
                                <NavLink to="/aboutUs">About us</NavLink>
                            </li>
                            <li>
                                <NavLink to="/logIn">Log in</NavLink>
                            </li>
                            <li>
                                <NavLink to="/signUp">Sign up</NavLink>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route path={'/'} exact component={Home}/>
                        <Route path={'/aboutUs'} component={AboutUs}/>
                        <Route path={'/logIn'} component={LogIn}/>
                        <Route path={'/signUp'}/>
                    </Switch>

                </div>
            </header>


        )
    }
}

export default App;
