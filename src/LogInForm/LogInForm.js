import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import '../../src/Modal/Modal.css'
import validate from '../../src/Redux/Validation'

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

const SignUpForm = (props) => {

    const { handleSubmit, reset, submitting } = props;

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
                    <button type="button" onClick={reset} className={'ClearValues'}>Clear Values</button>
                </div>
            </div>

        </form>
    )
}

export default reduxForm({
    form: 'signUp',  // a unique identifier for this form
    validate
})(SignUpForm)