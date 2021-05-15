import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'

class Question extends Component {
    render() {
        return (
            <Fragment>
                {this.props.isAnswered === true ? (
                    <Answered
                        questionId={this.props.questionId}
                    />
                ) : (
                    <Unanswered
                        questionId={this.props.questionId}
                    />
                )}
            </Fragment>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.match.params ? props.match.params : '';
    const usersData = questionId ? (Object.values(users)
        .filter(user => 'sarahedo'.includes(user.id)))[0] : ''
    const isAnswered = usersData !== undefined ? Object.keys(usersData.answers).includes(questionId) : ''

    return {
        isAnswered,
        questionId
    }
}


export default connect(mapStateToProps)(Question)