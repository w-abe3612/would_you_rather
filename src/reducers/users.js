import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTIONS_TO_USER, VOTE_QUESTION_ANSWER_TO_USER } from '../actions/questions'

export default function users(state = {}, action) {
  console.log("aaaaaaaaaaaaaaaaaa")
  const {question,authedUser,author, qid, answer} = action

  console.log({question,authedUser,author, qid, answer})
  switch (action.type) {
    case RECEIVE_USERS:
      console.log(action)
      return {
        ...state,
        ...action.users
      }

    break;
    case ADD_QUESTIONS_TO_USER:
      
      console.log({
        ...state,
        [author]: {
          ...state[author]
        }
      })
      return state


      return {
        ...state,
        [author]: {
          ...state[author],
          questions:state[author].questions.concat(question.id)
        }
      }
    break;
    case VOTE_QUESTION_ANSWER_TO_USER:
      console.log("test")


      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [qid]: answer
          }
        }
      }
    break;
    default:
      return state
  }
}