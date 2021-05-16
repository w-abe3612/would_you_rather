import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'

class Answered extends Component {
    render() {

        return (
            <section className="m-question">
                <header className="inner-header">
                    <h2>{this.props.usersData.name} asks:</h2>
                </header>
                <div className="inner_box">
                    <UserPic userIcon={this.props.usersData.avatarURL} />
                    <div className="m-content">
                        <p className="m-watchword">Results: </p>
                        <UserPic userIcon={this.props.usersData.avatarURL} />
                        <ul className="m-results">
                            {this.props.optionsData.map((option, index) => (
                                <li key={'option-' + index + '--votes-detail_item'}
                                    data-myvote={option.myvote} >
                                    <p className="m-question_word">{option.text}</p>
                                    <div className="m-graph">
                                        <div className="m-tick_mark"
                                            style={{ width: `${option.percentage}%` }} >{`${option.percentage}%`}</div>
                                    </div>
                                    <p className="m-votes">{option.votes.length} out of {this.props.totalVotes} votes</p>
                                    {option.myvote === true && (<div className="m-yourvote_icon">Your<br />vote</div>)}
                                </li>
                            ))}
                        </ul>
                        <Link to={`/`} className="m-back_btn">Back</Link>
                    </div>
                </div>
            </section>
        )
    }
}

Answered.propTypes = {
    usersData: PropTypes.object.isRequired,
    questionData: PropTypes.object.isRequired,
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionData } = props;

    const totalVotes = questionData.optionOne.votes.length + questionData.optionTwo.votes.length;

    const optionsData = [questionData.optionOne, questionData.optionTwo].map((option) => {
        option.percentage = Math.floor(option.votes.length / totalVotes * 100).toFixed(0).toString()
        option.myvote = option.votes.includes(authedUser.id)
        return option
    }).sort((a, b) => b.votes.length - a.votes.length)


    return {
        optionsData,
        totalVotes
    }

}

export default withRouter(connect(mapStateToProps)(Answered))