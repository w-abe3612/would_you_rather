export const RECEIVE_AUTHENTICATED_USER = 'RECEIVE_AUTHENTICATED_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function receiveAuthenticatedUser (authedUser) {
    return {
        type:RECEIVE_AUTHENTICATED_USER,
        authedUser
    }
}

export function handleLogin (id){
    return {
        type:LOGIN_USER,
        id
    }
}