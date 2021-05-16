import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTIONS_TO_USER, VOTE_QUESTION_ANSWER_TO_USER } from '../actions/questions'

export default function users(state = {}, action) {
  const { question, authedUser, author, qid, answer } = action

  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users
      }

    case ADD_QUESTIONS_TO_USER:

      return {
        ...state,
        [author]: {
          ...state[author],
          questions: state[author].questions.concat(question.id)
        }
      }

    case VOTE_QUESTION_ANSWER_TO_USER:
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
    default:
      return state
  }
}