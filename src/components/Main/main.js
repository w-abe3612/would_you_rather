import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'

class Main extends Component{
    render(){
        return(
            <Fragment>
                <Question />
                <Login />
                <Home />
            </Fragment>
        )
    }
}

export default Main