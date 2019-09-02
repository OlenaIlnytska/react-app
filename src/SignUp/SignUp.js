import React, {Component} from 'react'
import AxiosRequests from '../axios/AxiosRequests'

class SignUp extends Component {

    myStorage = window.localStorage;

    state = {
        email: '',
        password: '',
        token: ''
    }

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
            <form action="" className={'modal'} style={{display: 'block'}}>

                <div className="modal-content">

                    <div className={'closeButton'}>

                    </div>

                    <button className="close">&times;</button>

                    <div className={'Email'}>
                        <h1>Email</h1>
                        <input type="text" onChange={(e) => this.setState({email: e.target.value})}/>
                    </div>

                    <div className={'Password'}>
                        <h1>Password</h1>
                        <input type="text" onChange={(e) => this.setState({password: e.target.value})}/>
                    </div>

                    {/*{this.myStorage.getItem('token')?*/}
                    {/*    <div>*/}
                    {/*        <button className={'Submit'} onClick={this.handleLogOut}>LogOut</button>*/}
                    {/*    </div>*/}
                    {/*    : <div>*/}
                    {/*        <button className={'Submit'} onClick={this.handleSubmit}>Submit</button>*/}
                    {/*    </div>*/}
                    {/*}*/}

                    <div>
                        <button className={'Submit'} onClick={this.handleSubmit}>Submit</button>
                    </div>

                    {/*<div className={'token'}>*/}
                    {/*    <span>Token: {this.myStorage.getItem('tokenSignUp') || '-'}</span>*/}
                    {/*</div>*/}
                </div>
            </form>
        )
    }
}

export default SignUp