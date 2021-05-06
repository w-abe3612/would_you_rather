export const RECEIVE_AUTHENTICATED_USER = 'RECEIVE_AUTHENTICATED_USER'

export function receiveAuthenticatedUser (authUser) {
    return {
        type:RECEIVE_AUTHENTICATED_USER,
        authUser
    }
}