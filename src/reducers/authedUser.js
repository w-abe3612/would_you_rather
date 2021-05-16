import { LOGIN_USER,LOGOUT_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {

  switch (action.type) {
    
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