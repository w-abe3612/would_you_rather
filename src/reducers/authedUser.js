import { RECEIVE_AUTHENTICATED_USER } from '../actions/authedUser'

const initialAuthenticated = {
    type:RECEIVE_AUTHENTICATED_USER,
    authedUser:{
        id:''
    }
}

export default function authedUser (state = null, action) {
/*
    if (typeof state === 'undefined') {
        return initialAuthenticated
    }*/

  switch (action.type) {
    case RECEIVE_AUTHENTICATED_USER :
      return {
        ...state,
        ...action.authedUser
      }
    default :
      return state
  }
}