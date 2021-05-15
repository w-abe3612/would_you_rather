import { RECEIVE_AUTHENTICATED_USER,LOGIN_USER,LOGOUT_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {

  switch (action.type) {
    case RECEIVE_AUTHENTICATED_USER :
      return {
        ...state,
        ...action.authedUser
      }
    
    case LOGIN_USER :
      const { id } = action
      return {
        ...state,
        id
      }
    
    case LOGOUT_USER :
      return {
        id:''
      }
    default :
      return state
  }
}