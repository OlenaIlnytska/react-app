import React, {Component} from 'react'
import axios from 'axios';

const apiLogIn = 'https://ski-rent-api.herokuapp.com/api/user_token'
const apiSignUp = 'https://ski-rent-api.herokuapp.com/api/sign_up'

class AxiosRequests extends Component {

    static handleLogIn = async (email, password) => {

        const login = axios.post(apiLogIn, JSON.stringify(
            {auth: {
                    email: email,
                    password: password
                }}),
            {headers: {'Content-Type': 'application/json'}} )
        return await login
    }

    static handleSignUp = async (email, password) => {

        const signup = axios.post(apiSignUp, JSON.stringify(
            {user: {
                    email: email,
                    password: password
                }}),
            {headers: {'Content-Type': 'application/json'}} )
        return await signup
    }
}

export default AxiosRequests