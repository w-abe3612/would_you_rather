import React, { Component } from 'react'
import { connect } from 'react-redux'
import LeaderList from './LeaderList'

class LeaderBoard  extends Component{
    render(){
        console.log(this.props.leaderboardData)
        return(
            <section className="m-leader_board">
                <ul className="m-leader">
                    {
                        this.props.leaderboardData.map( (user,i)=> (

                            <LeaderList
                                id={user.id}
                                name={user.name}
                                avatarURL={user.avatarURL}
                                answerCount={user.answerCount}
                                questionCount={user.questionCount}
                                total={user.total}
                                index={i}
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
      .sort((a, b) => a.total - b.total)
      .reverse()
      .slice(0, 3);
    return {
      leaderboardData
    };
  }
  
  export default connect(mapStateToProps)(LeaderBoard );