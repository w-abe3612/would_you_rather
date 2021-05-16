import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'



class Home extends Component {
    state = {
        isCurrent: 'unanswered'
    }
    handleToggleTab = e => {
        this.setState({ isCurrent: e.target.id })
    }

    render() {
        return (
            <section className="m-home">
                <div className="m-menu_wrap">
                    <ul className="m-tabs">
                        <li key="unanswered" id='unanswered'
                            data-current={this.state.isCurrent === 'unanswered' ? true : false}
                            onClick={this.handleToggleTab}>Unansswered<span> Questions</span></li>
                        <li key="answered" id='answered'
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
    const loginUser = (Object.values(users)
        .filter(user => authedUser.id.includes(user.id)))[0]

    const answeredIds = loginUser !== undefined ? Object.keys(loginUser.answers) : null

    const answered = loginUser !== undefined && questions !== undefined ?
        Object.values(questions)
            .filter(question => answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp) : []

    const unanswered = loginUser !== undefined && questions !== undefined ?
        Object.values(questions)
            .filter(question => !answeredIds.includes(question.id))
            .sort((a, b) => b.timestamp - a.timestamp) : []

    return {
        answered,
        unanswered
    }
}


export default connect(mapStateToProps)(Home)