import React from 'react'


const validate = values => {
    const errors = {}
    if(!values.email){
        errors.email = 'Required!'
    }
    // else if(values.email.length<8){
    //     errors.email = 'Must be 8 symbols at least!'
    // }
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

export default validate