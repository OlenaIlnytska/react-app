import {ADD_TOKEN, DELETE_TOKEN} from "./Actions";

const InitialState = {
    localToken: ''

}

export default function (state = InitialState, action) {
    switch (action.type) {
        case ADD_TOKEN:
            console.log(action.payload)
            return {
                ...state,
                localToken: action.payload
            }
        case DELETE_TOKEN:
            return {
                ...state,
                localToken: null
            }
        default:
            return state
    }

}

function mapStateToProps(state) {
    const { token } = state
    return {  }
}