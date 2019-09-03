import React, {Component} from 'react'
import AxiosRequests from '../axios/AxiosRequests'
import SignUpForm from '../../src/SignUpForm/SignUpForm'

class SignUp extends Component {

    myStorage = window.localStorage;

    state = {
        email: '',
        password: '',
        token: ''
    }

    // handleSubmit = (data) => {
    //     console.log(data)
    // }

    handleSubmit = event => {
        // this.myStorage.clear()
        event.preventDefault()
        AxiosRequests.handleSignUp(this.state.email, this.state.password).then(data => {
            this.myStorage.setItem('token', data.data.jwt)
            this.props.closeModal()
                // this.setState({token: data.data.jwt})
                // console.log(data.data.jwt)
            }
        ).catch(e => {console.log(e)})
        // this.setState({token: data.jwt})
    }

    // handleLogOut = () => {
    //     this.myStorage.removeItem('token');
    // }

    render() {
        return(
            <SignUpForm />
        )
    }
}

export default SignUp

