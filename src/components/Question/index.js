import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'
import NotFound from '../Common/NotFound'

class Question extends Component {
    render() {
        if(this.props.questionData === undefined){
            return <NotFound />
        }
        return (
            <Fragment>
                {this.props.isAnswered === true ? (
                    <Answered
                        usersData={this.props.usersData && this.props.usersData}
                        questionData={this.props.questionData}
                    />
                ) : (
                    <Unanswered
                        authedUser={this.props.authedUser}
                        usersData={this.props.usersData && this.props.usersData}
                        questionData={this.props.questionData}
                    />
                )}
            </Fragment>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.match.params ? props.match.params : '';

    const questionData = questionId ? (Object.values(questions)
        .filter(questions => questionId.includes(questions.id)))[0] : ''

    const usersData = questionData !== undefined && questionData.author !== undefined ? 
        (Object.values(users).filter(user => questionData.author.includes(user.id)))[0] : ''

    const loginUser = (Object.values(users)
        .filter(user => authedUser.id.includes(user.id)))[0]

    const isAnswered = loginUser !== undefined ? Object.keys(loginUser.answers).includes(questionId):''

    return {
        authedUser,
        usersData,
        questionData,
        isAnswered,
    }
}


export default connect(mapStateToProps)(Question)