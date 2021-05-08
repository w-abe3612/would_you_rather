import { RECEIVE_USERS } from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
        console.log(action)
      return {
        ...state,
        ...action.users
      }
    default :
      return state
  }
}