import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../../actions/questions'
import { Redirect } from 'react-router-dom'

class CreateQuestion extends Component {
    state = {
        optionOneText: '',
        optionTwoText: '',
        toHome: false,
    }
    handleChange = (e) => {
        const text = e.target.value
        const inputId = e.target.id
    
        this.setState(() => ({
            optionOneText: inputId === 'optionOneText' ?text:this.state.optionOneText,
            optionTwoText: inputId === 'optionTwoText' ?text:this.state.optionTwoText,
        }))
    }
    handleSubmit = (e) => {
        e.preventDefault()

        const { optionOneText,optionTwoText } = this.state
        const { dispatch, authedUser } = this.props
    
        dispatch(handleAddQuestion(optionOneText,optionTwoText,authedUser.id))

        this.setState(() => ({
            optionOneText: '',
            optionTwoText: '',
            toHome: true,
          }))
    
    }
    render() {
        const { optionOneText,optionTwoText, toHome } = this.state

        if (toHome === true) {
          return <Redirect to='/' />
        }
        return (
            <section className="m-new_question">
                <header className="inner-header">
                    <h2>Create New Question</h2>
                </header>
                <div className="inner_box">
                    <p className="m-watchword">Would You Rather ...</p>
                    <form onSubmit={this.handleSubmit} className="m-form">
                        <input type="text" 
                            onChange={this.handleChange}
                            value={optionOneText}
                            className="optionOneText" 
                            id="optionOneText" 
                            placeholder="Please enter the first option" />
                        <div className="m-separate"><span>OR</span></div>
                        <input type="text" 
                            onChange={this.handleChange}
                            value={optionTwoText}
                            className="optionTwoText" 
                            id="optionTwoText" 
                            placeholder="Please enter your second option" />
                        <button className="m-submit" 
                            type="submit"
                            disabled={!(this.state.optionOneText && this.state.optionTwoText)} >Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

function mapStateToProps({ authedUser }) {

    return {
        authedUser
    }
}


export default connect(mapStateToProps)(CreateQuestion)
