import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import PropTypes from 'prop-types';
import { handleVoteQuestionAnswer } from '../../actions/questions'
import UserPic from '../Common/UserPic'

class Unanswered extends Component {

    state = {
        value: ''
    }

    handleChange = (e) => {

        this.setState(() => ({
            value: e.target.value,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()

        const { value } = this.state
        const { dispatch, questionData, authedUser } = this.props

        dispatch(handleVoteQuestionAnswer(authedUser.id, questionData.id, this.state.value))

        this.setState(() => ({
            value: ''
        }))
    }
    render() {
        return (
            <section className="m-question">
                <header className="inner-header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div className="inner_box">
                    <UserPic userIcon={this.props.usersData.avatarURL} />
                    <div className="m-content">
                        <p className="m-watchword">Would You Rather ...</p>
                        <UserPic userIcon={this.props.usersData.avatarURL} />
                        <form onSubmit={this.handleSubmit} className="m-form">
                            <div className="m-form__inputs">
                                <input
                                    type="radio"
                                    onChange={this.handleChange}
                                    id="optionOne"
                                    name="option"
                                    value="optionOne"
                                    className="m-radio-input" />
                                <label for="optionOne">{this.props.questionData.optionOne.text}</label>
                                <input
                                    type="radio"
                                    onChange={this.handleChange}
                                    id="optionTwo"
                                    name="option"
                                    value="optionTwo"
                                    className="m-radio-input" />
                                <label for="optionTwo">{this.props.questionData.optionTwo.text}</label>
                            </div>
                            <button className="m-submit"
                                type="submit"
                                disabled={!this.state.value} >Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


Unanswered.propTypes = {
    authedUser: PropTypes.object.isRequired,
    usersData: PropTypes.object.isRequired,
    questionData: PropTypes.object.isRequired,
}

export default connect()(Unanswered)