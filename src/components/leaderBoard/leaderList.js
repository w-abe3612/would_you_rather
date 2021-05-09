import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPic from '../Common/UserPic'
import AnsweredScore from './AnsweredScore'
import ScoreDetail from './ScoreDetail'

class LeaderList extends Component {
    render() {
        return (
            <li key={this.props.id} class="m-leader_card">
                <UserPic />
                <div class="m-content">
                    <p class="m-content__name">{this.props.name}</p>
                    <UserPic />
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

export default LeaderList