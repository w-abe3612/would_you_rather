import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'



class Home extends Component {
    state = {
        isCurrent: 'unanswered'
    }
    handleToggleTab = e => {
        this.setState({ isCurrent: e.target.id})
    }

    render() {
        return (
            <section className="m-home">
                <div className="m-menu_wrap">
                    <ul className="m-tabs">
                        <li id='unanswered' 
                            data-current={this.state.isCurrent === 'unanswered' ? true : false} 
                            onClick={this.handleToggleTab}>Unansswered<span> Questions</span></li>
                        <li id='answered' 
                            data-current={this.state.isCurrent === 'answered' ? true : false} 
                            onClick={this.handleToggleTab}>Answered<span> Questions</span></li>
                    </ul>
                    <div className="m-panels">
                        <QuestionsList 
                            isCurrent={this.state.isCurrent} 
                            unanswered={this.props.unanswered}
                            answered={this.props.answered}
                        />
                    </div>
                </div>
            </section>
        )
    }
}
function mapStateToProps({ authedUser, users, questions }) {
    const answeredIds = users.sarahedo !== undefined ? Object.keys(users.sarahedo.answers) : null

    const answered = users.sarahedo !== undefined && questions !== undefined ?
        Object.values(questions)
            .filter(question => answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp) : []

    const unanswered = users.sarahedo !== undefined && questions !== undefined ?
        Object.values(questions)
            .filter(question => !answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp) : []

    return {
        answered,
        unanswered
    }
}


export default connect(mapStateToProps)(Home)