import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'

class Answered extends Component {
    render() {
        return (
            <section className="m-question">
                <header className="inner-header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div className="inner_box">
                    <UserPic userIcon={this.props.usersData.avatarURL} />
                    <div className="m-content">
                        <p className="m-watchword">Results: </p>
                        <UserPic userIcon={this.props.usersData.avatarURL} />
                        <ul className="m-results">
                            <li>
                                <p className="m-question_word">{this.props.questionData.optionOne.text}</p>
                                <div className="m-graph">
                                    <div className="m-tick_mark"
                                        style={{width:`${!this.props.oneVotePercentage?'0':this.props.oneVotePercentage}%`}}
                                            
                                            
                                    >{(!this.props.oneVotePercentage?'0':this.props.oneVotePercentage) + '%'}</div>
                                </div>
                            </li>
                            <li>
                                <p className="m-question_word">{this.props.questionData.optionTwo.text}</p>
                                <div className="m-graph">
                                    <div className="m-tick_mark"
                                    style={{width:`${this.props.twoVotePercentage.toString()}%`}}
                                    >{this.props.twoVotePercentage.toString() + '%'}</div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <Link to={`/`} className="m-back_btn">Back</Link>
                </div>
            </section>
        )
    }
}

Answered.propTypes = {
    usersData:PropTypes.object.isRequired,
    questionData:PropTypes.object.isRequired,
}

function mapStateToProps({ authedUser, users, questions }, props) {
    const { questionData } = props;

    const optionOneVotes = questionData?questionData.optionOne.votes.length:'';
     
    const optionTwoVotes = questionData?questionData.optionTwo.votes.length:'';
    
    const totalVotes     = optionOneVotes + optionTwoVotes;

    const oneVotePercentage = optionOneVotes && totalVotes?Math.floor(optionOneVotes / totalVotes * 100).toFixed(0).toString():''
    const twoVotePercentage = optionTwoVotes && totalVotes?Math.floor(optionTwoVotes / totalVotes * 100).toFixed(0).toString():''


    return {
        oneVotePercentage,
        twoVotePercentage,
        totalVotes
    }
}

export default withRouter(connect(mapStateToProps)(Answered))