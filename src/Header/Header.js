import React, {Component} from "react";
import './Header.css';
import {NavLink} from 'react-router-dom'
import img from '../../src/logo.png'
import Modal from '../Modal/Modal'

class Header extends Component {

    state = {
        modal: false
    }

    handleLogIn = () => {
        this.setState({
            modal: true
        })
    }

    handleCloseModal = () => {
        this.setState({
            modal: false
        })
    }

    handleShowModal = () => {
        return(
            this.state.modal && <Modal closeModal={this.handleCloseModal}/>
        )
    }

    render() {
        return (
                <div className="Header">
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
                            <NavLink className={'NavLink'} onClick={this.handleLogIn}>Log in</NavLink>
                        </div>
                        <div className={'listElement'}>
                            <NavLink className={'NavLink'} to="/signUp">Sign up</NavLink>
                        </div>
                        {this.handleShowModal()}
                    </div>
                    {/*to="/logIn"*/}
                </div>
        )
    }
}

export default Header;
