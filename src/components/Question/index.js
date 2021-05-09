import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'

class Question extends Component {
    render() {
        return (
            <Fragment>
                {this.props.isAnswered === true?(
                    <Answered />
                ):(
                    <Unanswered />
                )}
            </Fragment>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionId } = props.match.params
    const usersData =  (Object.values(users)
        .filter(user => 'sarahedo'.includes(user.id)))[0]
    const isAnswered = Object.keys(usersData.answers).includes(questionId)
    
    return {
        isAnswered
    }
}


export default connect(mapStateToProps)(Question)