import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import {handleVoteQuestionAnswer} from './actions/qustions'

class Unanswered extends Component {
    state = {
        answer: '',
      }
      handleChange = (e) => {
        const answer = e.target.value
    
        this.setState(() => ({
            answer:answer
        }))
      }
      //handleVoteQuestionAnswer (authedUser, qid, answer )
      handleSubmit = (e) => {
        e.preventDefault()
    
        const { answer } = this.state
        const { dispatch, questionId } = this.props
    
        dispatch(handleVoteQuestionAnswer ('sarahedo', questionId, answer))
    
        this.setState(() => ({
            answer:'',
        }))
      }
    render() {
        return (
            <section class="m-question">
                <header class="inner_header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div class="inner_box">
                    <figure class="m-user_pic">
                        <img src="" alt="" />
                    </figure>
                    <div class="m-content">
                        <p class="m-watchword">Would You Rather ...</p>
                        <figure class="m-user_pic">
                            <img src="" alt="" />
                        </figure>
                        <form onSubmit={this.handleSubmit} class="m-form">
                            <input 
                                type="radio" 
                                onChange={this.handleChange}
                                name="optionOne" 
                                value="optionOne"
                                class="m-radio-input" />
                            <label for="question-01">be a front-end developer?</label>
                            <input 
                                type="radio" 
                                onChange={this.handleChange}
                                name="optionTwo" 
                                value="ooptionTwo"
                                class="m-radio-input" />
                            <label for="question-02">be a front-end developer?</label>
                            <button class="m-submit" type="button">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.match.params
    const questionData =  (Object.values(questions)
        .filter(question => questionId.includes(questionId)))[0]

    return {
        questionId
    }
}

export default connect(mapStateToProps)(Unanswered)