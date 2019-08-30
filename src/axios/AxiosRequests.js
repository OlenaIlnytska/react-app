import React, {Component} from 'react'
import axios from 'axios';

class AxiosRequests extends Component {

    handleLogIn = (email, password, api) => {

        axios.post(api, JSON.stringify(
            {auth: {
                    email: email,
                    password: password
                }}),
            {headers: {'Content-Type': 'application/json'}} )
            .then(data => {
                this.myStorage.setItem('token', this.state.token);
            })
            .catch(error => {
                console.log(error)
            })
    }

    handleLogOut = () => {
        this.myStorage.removeItem('token');
    }
}

export default AxiosRequests