import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleVoteQuestionAnswer } from '../../actions/questions'

class Unanswered extends Component {

    state = {
        value: '',
        toRedirect:false
    }

    
    handleChange = (e) => {

        this.setState(() => ({
            value: e.target.value,
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault()
        

        const { value } = this.state
        const { dispatch, questionId } = this.props


        dispatch(handleVoteQuestionAnswer('sarahedo', questionId, 'optionTwo'))

        this.setState(() => ({
            value: '',
            toRedirect:true
        }))
    }
    render() {
/*
        if (this.state.toRedirect === true) {
            return <Redirect to={'/questions/' + this.props.questionId} />
        }*/

        return (
            <section class="m-question">
                <header class="inner_header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div class="inner_box">
                    <figure class="m-user_pic">
                        <img src="" alt="" />
                    </figure>
                    <div class="m-content">
                        <p class="m-watchword">Would You Rather ...</p>
                        <figure class="m-user_pic">
                            <img src="" alt="" />
                        </figure>
                        <form onSubmit={this.handleSubmit} class="m-form">
                            <input
                                type="radio"
                                onChange={this.handleChange}
                                id="optionOne"
                                name="option"
                                value="optionOne"
                                class="m-radio-input" />
                            <label for="optionOne">be a front-end developer?</label>
                            <input
                                type="radio"
                                onChange={this.handleChange}
                                id="optionTwo"
                                name="option"
                                value="optionTwo"
                                class="m-radio-input" />
                            <label for="optionTwo">be a front-end developer?</label>
                            <button class="m-submit" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}


function mapStateToProps({ authedUser, users, questions }, props) {
    console.log(props)
    return {}
}

export default connect(mapStateToProps)(Unanswered)