import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { receiveAuthenticatedUser } from '../actions/authedUser'

//todo:AuthenticatedUser action 
const authUser = {id:"test"}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then((users, questions) => {
                dispatch(receiveUsers(users))
                //dispatch(receiveAuthenticatedUser(authUser))
                dispatch(receiveQuestions(questions))
            })
    }
}