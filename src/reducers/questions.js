import { RECEIVE_QUESTIONS, ADD_QUESTIONS } from '../actions/questions'

export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      console.log("test")
      console.log(action)
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTIONS:
      const { question } = action;

      return {
        ...state,
        [question.id]: question
      };
    default:
      return state
  }
}