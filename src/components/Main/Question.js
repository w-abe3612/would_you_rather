import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
    render() {
        return (
            <Fragment>
                <answered />
                <unanswered />
            </Fragment>
        )
    }
}

export default Question