import React, {Component} from "react";
import './Header.css';
import {NavLink} from 'react-router-dom'
import img from '../../src/logo.png'
import Modal from '../Modal/Modal'
import SignUp from "../SignUp/SignUp";
import LogIn from "../LogIn/LogIn";
import SignUpForm from "../SignUpForm/SignUpForm";
import {addToken, deleteToken} from "../Redux/Actions";
import {connect} from "react-redux";

class Header extends Component {

    state = {
        modal: false,
        signUp: false
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
            // this.state.modal && <Modal closeModal={this.handleCloseModal}/>
            this.state.modal && <Modal closeModal={this.handleCloseModal}/>
        )

    }

    handleLogOut = () => {
        this.props.deleteToken()
    }

    handleSignUp = () => {
        this.setState({
            signUp: true
        })
    }

    handleShowSignUp = () => {
        return(
            // this.state.modal && <Modal closeModal={this.handleCloseModal}/>
            this.state.signUp && <SignUp closeModal={this.handleCloseSignUp}/>
        )
    }

    handleCloseSignUp = () => {
        this.setState({
            signUp: false
        })
    }

    componentDidMount() {
        const token = localStorage.getItem('token')
        if(token){
            this.props.setToken(token)
        }
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

                        {this.props.getToken ?
                            <div className={'listElement'}>
                                <NavLink className={'NavLink'} onClick={this.handleLogOut}>Log out</NavLink>
                            </div>
                            :
                            <div className={'listElement'}>
                                <NavLink className={'NavLink'} onClick={this.handleLogIn}>Log in</NavLink>
                            </div>
                        }

                        {this.props.getToken ?
                            null
                            :
                            <div className={'listElement'}>
                                <NavLink className={'NavLink'} onClick={this.handleSignUp}>Sign up</NavLink>
                            </div>
                        }

                        {this.handleShowModal()}
                        {this.handleShowSignUp()}

                    </div>
                </div>
        )
    }
}

function mapStateToProps(state) {
    const { token } = state
    return { getToken: token.localToken }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        setToken: (text) => dispatch(addToken(text)),
        deleteToken: () => dispatch(deleteToken()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
