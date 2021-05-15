import React, { Component} from 'react'
import { connect } from 'react-redux'
import SelectUsers from './SelectUsers'
import {handleLoginUser} from '../../actions/authedUser'

class Login extends Component {
    state = {
        userId:""
    }

    handleOnSubmit = (e) => {
        e.preventDefault()
        

        const { userId } = this.state
        const { dispatch } = this.props

        dispatch(handleLoginUser(userId))
        this.setState({userId:""})
    }
    selectLoginUser = (id) => {
        this.setState({userId:id})
    }

    render() {
        return (
            <section className="m-login">
                <header className="m-login_header">
                    <h1 className="m-title">Welcome to the Would You Rather App!</h1>
                    <p className="m-subtext">Pease sign in to continue</p>
                </header>

                <div className="inner-box">
                    <figure className="m-top_pic">
                        <img src="../../src/img/top_icon.svg" alt="top icon" />
                    </figure>
                    <p className="m-sign-in">Sign in</p>

                    <form 
                        className="m-form"
                        onSubmit={ this.handleOnSubmit } >
                        <SelectUsers selectLoginUser={this.selectLoginUser}/>
                        <button 
                            className="m-submit"
                            type="submit">Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default connect()(Login)