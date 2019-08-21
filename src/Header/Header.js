import React, {Component} from "react";
import './Header.css';
import {NavLink} from 'react-router-dom'
import img from '../../src/logo.png'

class Header extends Component {

    render() {
        return (
                <div className="App">
                    <div>
                        <img src={img} alt="Logo" className={'logo'}/>
                    </div>

                    <div className={'list'}>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/">All products</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/aboutUs">About us</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/logIn">Log in</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/signUp">Sign up</NavLink>
                        </div>
                    </div>

                </div>
        )
    }
}

export default Header;
