import React, {Component} from 'react'
import AxiosRequests from '../axios/AxiosRequests'
import SignUpForm from '../../src/SignUpForm/SignUpForm'
import { addToken } from '../../src/Redux/Actions'
import store from "../../src/Redux/store"
import { connect } from 'react-redux'

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
        // event.preventDefault()
        AxiosRequests.handleSignUp(event.email, event.password).then(data => {
            this.myStorage.setItem('token', data.data.jwt)
            this.props.closeModal()

            // store.dispatch(addToken(data.data.jwt))
            //             // console.log(store.getState())

            this.props.setToken(data.data.jwt)

                // this.setState({token: data.data.jwt})
                // console.log(data.data.jwt)
            }
        ).catch(e => {console.log(e)})
        // this.setState({token: data.jwt})
    }

    handleClose = () => {
        this.props.closeModal()
    }

    // handleLogOut = () => {
    //     this.myStorage.removeItem('token');
    // }

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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)