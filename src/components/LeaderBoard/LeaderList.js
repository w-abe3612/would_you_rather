import React, { Component } from 'react'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'
import AnsweredScore from './AnsweredScore'
import ScoreDetail from './ScoreDetail'

class LeaderList extends Component {
    render() {
        return (
            <li  className="m-leader_card">
                <UserPic userIcon={this.props.avatarURL} />
                <div className="m-content">
                    <p className="m-content__name">{this.props.name}</p>
                    <UserPic userIcon={this.props.avatarURL} />
                    <ScoreDetail 
                        answerCount={this.props.answerCount}
                        questionCount={this.props.questionCount}
                    />
                </div>
                <AnsweredScore 
                    total={this.props.total}
                />
            </li>
        )
    }
}

LeaderList.propTypes = {
    id:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    avatarURL:PropTypes.string.isRequired,
    answerCount:PropTypes.number.isRequired,
    questionCount:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired,
}

export default LeaderList