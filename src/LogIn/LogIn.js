import React, {Component} from 'react'
import './LogIn.css'
import axios from 'axios';


class LogIn extends Component {

    myStorage = window.localStorage;

    state = {
        email: '',
        password: '',
        api: 'https://ski-rent-api.herokuapp.com/api/user_token',
        token: 'token',
        // storage: false
    }

    // componentDidMount() {
    //     if(this.myStorage.getItem('token')){
    //         this.setState({
    //             storage: true
    //         })
    //     }
    // }

    handleLogIn = () => {

        ///
        //
        //
        axios.post(this.state.api, JSON.stringify(
                {auth: {
                        email: this.state.email,
                        password: this.state.password
                    }}),
            {headers: {'Content-Type': 'application/json'}} )
            .then(data => {
                //this.setState({token: data.body.jwt})
                this.myStorage.setItem('token', data.data.jwt);
                this.setState({token: data.data.jwt})
            })
            .catch(error => {
                console.log(error)
            })

        // alert(this.myStorage.getItem('token'))

        // fetch(this.state.api, {method: 'POST', body: JSON.stringify(
        //         {auth: {
        //                 email: this.state.email,
        //                 password: this.state.password
        //             }}),
        //     headers: {'Content-Type': 'application/json'}} )
        //     .then(data => {
        //         //this.setState({token: data.body.jwt})
        //         this.setState({ data: data}, () => {console.log(this.state.data)})
        //         this.setState({ token: data.data.access_token}, () => {console.log(this.state.token)})
        //     })
        //     .catch(e => {
        //         console.log(e)
        //     })
    }

    handleLogOut = () => {
        this.setState({
            token: ''
        })

        this.myStorage.removeItem('token');
        // alert(this.myStorage.getItem('token'))
    }

    render() {
        return(
            <div className="LogIn">
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
                        <button onClick={this.handleLogOut}>LogOut</button>
                    </div>
                    : <div>
                        <button onClick={this.handleLogIn}>LogIn</button>
                    </div>
                }
                <div>Token: {this.myStorage.getItem('token') || '-'}</div>
                {/*{this.state.storage?<div>Token: {this.myStorage.getItem('token')}</div>:<div>Token: - </div>}*/}
            </div>

        )
    }
}

export default LogIn