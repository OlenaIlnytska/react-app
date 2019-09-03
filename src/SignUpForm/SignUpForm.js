import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../src/Modal/Modal.css'

const SignUpForm = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props;

    const renderItem = ({label, name, type, placeholder}) => (
        <div>
            <label>{label}</label>
            <input
                name={name}
                type={type}
                placeholder={placeholder}
            />
        </div>
    )

    return (
        <form onSubmit={handleSubmit} className={'modal'} style={{display: 'block'}}>
            <div className="modal-content">

                <div className={'closeButton'}>

                </div>

                <button type="button" className="close">&times;</button>

                <div className={'Email'}>
                    <Field
                        label="Email"
                        name="email"
                        component={renderItem}
                        type="text"
                        placeholder="Email"
                    />
                </div>

                <div className={'Password'}>
                    <Field
                        label="Password"
                        name="password"
                        component={renderItem}
                        type="password"
                        placeholder="Password"
                    />
                </div>

                <div>
                    <button type="submit" disabled={pristine || submitting} className={'Submit'} onClick={''}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className={'ClearValues'}>Clear Values</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'signUp'  // a unique identifier for this form
})(SignUpForm)