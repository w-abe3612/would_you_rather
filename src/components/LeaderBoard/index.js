import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderList from './LeaderList'

class LeaderBoard extends Component{
    render(){
        return(
            <section className="m-leader_board">
                <ul className="m-leader">
                    {
                        this.props.leaderboardData !== null &&
                        this.props.leaderboardData.map( (user) => (
                            <LeaderList
                                key={user.id + '--leaderlist__item'}
                                id={user.id}
                                name={user.name}
                                avatarURL={user.avatarURL}
                                answerCount={user.answerCount}
                                questionCount={user.questionCount}
                                total={user.total}
                            />
                        ))
                    }   
                </ul>
            </section>
        )
    }
}

function mapStateToProps({ users }) {
    const leaderboardData = Object.values(users)
      .map(user => ({
        id: user.id,
        name: user.name,
        avatarURL: user.avatarURL,
        answerCount: Object.values(user.answers).length,
        questionCount: user.questions.length,
        total: Object.values(user.answers).length + user.questions.length
      }))
      .sort((a, b) =>  b.total - a.total)
      .slice(0, 3);
    return {
      leaderboardData
    };
  }
  
  export default connect(mapStateToProps)(LeaderBoard);