import { RECEIVE_AUTHENTICATED_USER } from '../actions/authedUser'

export default function authedUser (state = null, action) {
  switch (action.type) {
    case RECEIVE_AUTHENTICATED_USER :
      return action.id
    default :
      return state
  }
}