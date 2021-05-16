import { saveQuestion, saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'
export const ADD_QUESTIONS_TO_USER = 'ADD_QUESTIONS_TO_USER'

export const VOTE_QUESTION_ANSWER = 'VOTE_QUESTION_ANSWER'
export const VOTE_QUESTION_ANSWER_TO_USER = 'VOTE_QUESTION_ANSWER_TO_USER'


export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions
  }
}


function addQuestion(question) {
  return {
    type: ADD_QUESTIONS,
    question,
  }
}

function addQuestionToUser(question,author) {
  return {
    type: ADD_QUESTIONS_TO_USER,
    question,
    author,
  }
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {

    return saveQuestion({ optionOneText, optionTwoText, author })
      .then((question) => {
        dispatch(addQuestion(question));
        dispatch(addQuestionToUser(question,author))
      })
  }
}


export function voteQuestionAnswer(authedUser, qid, answer) {
  return {
    type: VOTE_QUESTION_ANSWER,
    authedUser, qid, answer,
  }
}

export function voteQuestionAnswerToUser(authedUser, qid, answer) {
  return {
    type: VOTE_QUESTION_ANSWER_TO_USER,
    authedUser, qid, answer,
  }
}
export function handleVoteQuestionAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(voteQuestionAnswer(authedUser, qid, answer))
    dispatch(voteQuestionAnswerToUser(authedUser, qid, answer))

    return saveQuestionAnswer({ authedUser, qid, answer })

  }
}


/*
export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
return new Promise((res, rej) => {
  setTimeout(() => {
    users = {
      ...users,
      [authedUser]: {
        ...users[authedUser],
        answers: {
          ...users[authedUser].answers,
          [qid]: answer
        }
      }
    }

    questions = {
      ...questions,
      [qid]: {
        ...questions[qid],
        [answer]: {
          ...questions[qid][answer],
          votes: questions[qid][answer].votes.concat([authedUser])
        }
      }
    }

    res()
  }, 500)
})
}

*/