
export const ADD_TOKEN = 'ADD_TOKEN'
export const DELETE_TOKEN = 'DELETE_TOKEN'

export function addToken(text) {
    console.log(text)
    return { type: ADD_TOKEN, payload: text }
}

export function deleteToken(){
    return { type: DELETE_TOKEN}
}