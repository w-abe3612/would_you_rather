import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class Answered extends Component {
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
                        <p class="m-watchword">Results: </p>
                        <figure class="m-user_pic">
                            <img src="" alt="" />
                        </figure>
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
    const { questionId } = props.match.params
    const questionData =  (Object.values(questions)
        .filter(question => questionId.includes(questionId)))[0]
    const optionOneVotes = questionData.optionOne.votes.length
     
    const optionTwoVotes = questionData.optionTwo.votes.length
    const totalVotes     = optionOneVotes + optionTwoVotes

    const oneVotePercentage = Math.floor(optionOneVotes / totalVotes * 100).toFixed(0)
    const twoVotePercentage = Math.floor(optionTwoVotes / totalVotes * 100).toFixed(0)
    console.log(oneVotePercentage)
    console.log(twoVotePercentage)
    console.log(totalVotes)
    return {
        optionOneVotes,
        optionTwoVotes,
        totalVotes
    }
}

export default withRouter(connect(mapStateToProps)(Answered))