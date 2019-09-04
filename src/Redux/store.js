import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { ADD_TOKEN } from './Actions'
import token from './Reducer'

const reducer = combineReducers({
    form: reduxFormReducer, // mounted under "form"
    token
})

// const store = (window.devToolsExtension
//     ? window.devToolsExtension()(createStore)
//     : createStore)(reducer);



const store = createStore(reducer)

export default store;
