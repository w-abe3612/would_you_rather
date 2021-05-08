import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import Answered from './Answered'
import Unanswered from './Unanswered'

class Question extends Component {
    render() {
        return (
            <Fragment>
                <Answered />
                <Unanswered />
            </Fragment>
        )
    }
}

export default Question