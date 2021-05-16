import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import QuestionItem from './QuestionItem'

class QuestionsList extends Component {
    render() {
        return (
            <ul className="m-panel">

                { this.props.isCurrent === 'unanswered'?
                    this.props.unanswered.map( question => (
                        <QuestionItem 
                            key={question.id}
                            questionId={question.id}
                            isCurrent={'unanswered'}
                        />
                    ) ):
                    this.props.answered.map( question => (
                        <QuestionItem 
                            key={question.id}
                            questionId={question.id}
                            isCurrent={'answered'}
                        />
                    ) )
                    } 
            </ul>
        )
    }
}

QuestionsList.propTypes = {
    isCurrent:PropTypes.string.isRequired,
    unanswered:PropTypes.array.isRequired,
    answered:PropTypes.array.isRequired
}

export default QuestionsList