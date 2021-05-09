import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'



class QuestionItem extends Component {
    render() {
        return (
            <li key={this.props.key} className="m-panel__item">
                <header className="inner_header">
                    {this.props.userData.name} asks:
                </header>
                <div className="inner_box">
                    <figure className="m-user_pic">
                        <img src="" alt="" />
                    </figure>
                    <div className="m-content">
                        <p className="m-watchword">Would You Rather ...</p>
                        <figure className="m-user_pic">
                            <img src="" alt="" />
                        </figure>
                        <p className="m-question_word">{this.props.questionData.optionOne.text} or {this.props.questionData.optionTwo.text}</p>
                        {this.props.isCurrent==='unanswered'?(
                            <Link to={`/questions/${this.props.questionId}`} className="m-view_poll_btn">View Poll</Link>
                        ):(
                            <Link to={`/questions/${this.props.questionId}`} className="m-view_result">Result</Link>
                        )}
                    </div>
                </div>
            </li>
        )
    }
}



function mapStateToProps({ authedUser, users, questions }, { questionId }) {

    const questionData = (Object.values(questions)
        .filter(question => questionId.includes(question.id)))[0]
    const userData = (Object.values(users)
        .filter(user => questionData.author.includes(user.id)))[0]
    return {
        questionData,
        userData
    }
}


export default withRouter(connect(mapStateToProps)(QuestionItem))