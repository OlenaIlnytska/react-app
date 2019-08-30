import React, {Component} from 'react'
import axios from 'axios';
import './Modal.css'
import AxiosRequests from '../axios/AxiosRequests'

class LogIn extends Component {

    myStorage = window.localStorage;

    state = {
        email: '',
        password: '',
        api: 'https://ski-rent-api.herokuapp.com/api/user_token',
        token: ''
    }

    handleLogIn = () => {

        axios.post(this.state.api, JSON.stringify(
            {auth: {
                    email: this.state.email,
                    password: this.state.password
                }}),
            {headers: {'Content-Type': 'application/json'}} )
            .then(data => {
                //this.setState({token: data.body.jwt})
                this.myStorage.setItem('token', this.state.token);
                this.setState({token: data.data.jwt})
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleLogOut = () => {
        this.setState({
            token: ''
        })

        this.myStorage.removeItem('token');
    }

    render() {
        return(
            <form action="" className={'modal'} style={{display: 'block'}}>
                <div className="modal-content">

                    <button className="close" onClick={() => {this.props.closeModal()}} >&times;</button>

                    <div className={'Email'}>
                        <h1>Email</h1>
                        <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>
                    <div className={'Password'}>
                        <h1>Password</h1>
                        <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>
                    {this.myStorage.getItem('token')?
                        <div>
                            <button onClick={AxiosRequests.handleLogOut}>LogOut</button>
                        </div>
                        : <div>
                            <button onClick={this.handleLogIn}>LogIn</button>
                        </div>
                    }
                    <div className={'token'}>
                        <span>Token: {this.myStorage.getItem('token') || '-'}</span>
                    </div>
                </div>
            </form>
        )
    }
}

export default LogIn