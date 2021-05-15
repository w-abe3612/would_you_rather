import { RECEIVE_QUESTIONS, ADD_QUESTIONS, VOTE_QUESTION_ANSWER } from '../actions/questions'

export default function questions(state = {}, action) {
  const { question,authedUser, qid, answer } = action;
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return {
        ...state,
        ...action.questions
      }
    case ADD_QUESTIONS:

      return {
        ...state,
        [question.id]: question
      };
    case VOTE_QUESTION_ANSWER:
      

      console.log(state)

      return {
        ...state,
        [qid]: {
          ...state[qid],
          [answer]: {
            ...state[qid][answer],
            votes: state[qid][answer].votes.concat([authedUser])
          }
        }
      }
    default:
      return state
  }
}