export const RECEIVE_AUTHENTICATED_USER = 'RECEIVE_AUTHENTICATED_USER'
export const LOGIN_USER = 'LOGIN_USER'
export const LOGOUT_USER = 'LOGOUT_USER'

export function receiveAuthenticatedUser (authedUser) {
    return {
        type:RECEIVE_AUTHENTICATED_USER,
        authedUser
    }
}

export function loginUser (id){
    return {
        type:LOGIN_USER,
        id
    }
}


export function logoutUser (){
    return {
        type:LOGOUT_USER,
    }
}

export function handleLoginUser(id){
    return (dispatch) => {
        dispatch(loginUser(id))
    }
}

export function handleLogoutUser(){
    return (dispatch) => {
        dispatch(logoutUser())
    }
}

