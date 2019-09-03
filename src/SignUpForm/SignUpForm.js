import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../src/Modal/Modal.css'


const renderItem = ({input, label, name, type, placeholder, className, meta: { touched, error }}) => (
    <div className={className}>
        <label>{label}</label>
        <input {...input}
               name={name}
               type={type}
               placeholder={placeholder}
        />
        {touched && ((error && <span className={'Error'}>{error}</span>))}
    </div>
)

const validate = values => {
    const errors = {}
    if(!values.email){
        errors.email = 'Required!'
    }
    else if(values.email.length<8){
        errors.email = 'Must be 8 symbols at least!'
    }
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
        errors.email = 'Your email is invalid!'
    }
    if(!values.password){
        errors.password = 'Required!'
    }
    else if(values.password.length<8){
        errors.password = 'Must be 8 symbols at least!'
    }
    else if(!/^[A-Za-z0-9]\w{7,14}$/.test(values.password)){
        errors.password = 'Your password is invalid!'
    }
    return errors
}

const SignUpForm = (props) => {

    const { handleSubmit, pristine, reset, submitting } = props;

    return (
        <form onSubmit={handleSubmit} className={'modal'} style={{display: 'block'}}>
            <div className="modal-content">

                <div className={'closeButton'}>

                </div>

                <button type="button" className="close">&times;</button>

                <Field
                    label="Email"
                    name="email"
                    component={renderItem}
                    type="text"
                    placeholder="Email"
                    className="Email"
                />

                <Field
                    label="Password"
                    name="password"
                    component={renderItem}
                    type="password"
                    placeholder="Password"
                    className="Password"
                />

                <div>
                    <button type="submit" disabled={submitting} className={'Submit'}>Submit</button>
                    <button type="button" disabled={pristine || submitting} onClick={reset} className={'ClearValues'}>Clear Values</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'signUp',  // a unique identifier for this form
    validate
})(SignUpForm)