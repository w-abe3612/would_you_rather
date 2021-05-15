import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import UserPic from '../Common/UserPic'

class Answered extends Component {
    render() {
        return (
            <section class="m-question">
                <header class="inner_header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div class="inner_box">
                    <UserPic />
                    <div class="m-content">
                        <p class="m-watchword">Results: </p>
                        <UserPic />
                        <ul class="m-results">
                            <li>
                                <p class="m-question_word">be a front-end developer?</p>
                                <div class="m-graph"></div>
                            </li>
                            <li>
                                <p class="m-question_word">be a front-end developer?</p>
                                <div class="m-graph"></div>
                            </li>
                        </ul>
                    </div>
                    <Link to={`/`} className="m-back_btn">Back</Link>
                </div>
            </section>
        )
    }
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.questionId;
    console.log(props)
    const questionData =  questionId?(Object.values(questions)
        .filter(question => questionId.includes(questionId)))[0]:'';
    const optionOneVotes = questionData?questionData.optionOne.votes.length:'';
     
    const optionTwoVotes = questionData?questionData.optionTwo.votes.length:'';
    const totalVotes     = optionOneVotes && optionTwoVotes?optionOneVotes + optionTwoVotes:''

    const oneVotePercentage = optionOneVotes && totalVotes?Math.floor(optionOneVotes / totalVotes * 100).toFixed(0):''
    const twoVotePercentage = optionTwoVotes && totalVotes?Math.floor(optionTwoVotes / totalVotes * 100).toFixed(0):''


    return {
        optionOneVotes,
        optionTwoVotes,
        totalVotes
    }
}

export default withRouter(connect(mapStateToProps)(Answered))