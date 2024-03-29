import React, {Component} from 'react'
import axios from 'axios';
import './Modal.css'
import AxiosRequests from '../axios/AxiosRequests'
import SignUpForm from "../SignUpForm/SignUpForm";
import {addToken} from "../Redux/Actions";
import {connect} from "react-redux";

class LogIn extends Component {

    myStorage = window.localStorage;

    state = {
        email: '',
        password: '',
        token: ''
    }

    handleSubmit = event => {
        // this.myStorage.clear()
        // event.preventDefault()
        AxiosRequests.handleLogIn(event.email, event.password).then(data => {
            this.myStorage.setItem('token', data.data.jwt)
            // console.log(localStorage.getItem('token'))
            this.props.closeModal()

            this.props.setToken(data.data.jwt)

            // this.setState({token: data.data.jwt})
            // console.log(data.data.jwt)
        })

        // this.setState({
        //     modal: false
        // })

    }

    // handleLogOut = () => {
    //     this.myStorage.removeItem('token');
    // }

    // handleClose = () => {
    //     const modal = document.getElementById("modal");
    //     modal.style.display = "none";
    // }


    handleClose = () => {
        this.props.closeModal()
    }

    render() {
        console.log(this.props.getToken)
        return(
            <SignUpForm onSubmit={this.handleSubmit} onClose={this.handleClose}/>
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
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)


// handleLogIn = () => {
//
//     axios.post(this.state.api, JSON.stringify(
//         {auth: {
//                 email: this.state.email,
//                 password: this.state.password
//             }}),
//         {headers: {'Content-Type': 'application/json'}} )
//         .then(data => {
//             //this.setState({token: data.body.jwt})
//             this.myStorage.setItem('token', this.state.token);
//             this.setState({token: data.data.jwt})
//         })
//         .catch(error => {
//             console.log(error)
//         })
// }
//
// handleLogOut = () => {
//     this.setState({
//         token: ''
//     })
//
//     this.myStorage.removeItem('token');
// }







// <form action="" className={"modal"} style={ {'display': 'block'} }>
// <div className="modal-content">
//
//     <div className={'closeButton'}>
//
//     </div>
//
// <button className="close">&times;</button>
//
// <div className={'Email'}>
//     <h1>Email</h1>
// <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
// </div>
//
// <div className={'Password'}>
//     <h1>Password</h1>
//     <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
// </div>
//
// <div>
// <button className={'Submit'} onClick={this.handleSubmit}>Submit</button>
// </div>
// </div>
// </form>