import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'
import Home from './Home'
import Login from './Login'

class Main extends Component{
    render(){
        console.log(this.props)
        //console.log(this.props.authedUser.id)
        return(
            <Fragment>
                {this.props.loading === true && this.props.authedUser !== undefined?(
                    <Home />
                ):(
                    <Login />
                )}
            </Fragment>
        )
    }
}
function mapStateToProps ({authedUser}) {
    return  {
        loading: authedUser === null
    }
  }

export default connect(mapStateToProps)(Main)