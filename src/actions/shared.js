import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveQuestions } from '../actions/questions'
import { receiveAuthenticatedUser } from '../actions/authedUser'
import { receiveUiStates } from '../actions/ui'

const users = {}
const questions = {}

const authedUser = {
    id:''
}

const ui = {
    header:{
        toggleFlg:false
    },
    tab:{

    },
    select:{
        toggleFlg:false
    }
}

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(receiveAuthenticatedUser(authedUser))
                dispatch(receiveQuestions(questions))
                dispatch(receiveUiStates(ui))
            })
    }
}