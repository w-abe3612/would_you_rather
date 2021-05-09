import { saveQuestion,saveQuestionAnswer } from '../utils/api'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTIONS = 'ADD_QUESTIONS'

export const VOTE_QUESTION_ANSWER = 'VOTE_QUESTION_ANSWER'

export function receiveQuestions (questions) {
    return {
        type:RECEIVE_QUESTIONS,
        questions
    }
}


function addQuestion(question) {
    return {
      type: ADD_QUESTIONS,
      question,
    }
}
  
  export function handleAddQuestion (optionOneText, optionTwoText, author) {
    return (dispatch) => {
  
      return saveQuestion ({optionOneText, optionTwoText, author})
        .then((question)=>{
            dispatch(addQuestion(question));
        })
    }
  }


  function voteQuestionAnswer(question) {
    return {
      type: VOTE_QUESTION_ANSWER,
      question,
    }
}

export function handleVoteQuestionAnswer (authedUser, qid, answer ) {
  return (dispatch) => {

    return voteQuestionAnswer ({ authedUser, qid, answer })
      .then((question)=>{
          dispatch(saveQuestionAnswer(question));
      })
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