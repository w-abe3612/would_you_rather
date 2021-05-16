import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Header from './Header'
import CreateQuestion from './CreateQuestion'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import Login from './Login'
import Footer from './Common/Footer'
import NotFound from './Common/NotFound'

class App extends Component {
  state = {
    isToggle: false
  }

  setToggle = () => {
    this.setState({
      isToggle: !this.state.isToggle
    })
  }
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className='l-layout'
        data-isopen={this.state.isToggle}
      >
        <div className='l-inner'
          data-loggedin={this.props.authedUser === null || this.props.authedUser.id === '' ? false : true}
        >
          {
            this.props.authedUser === null || this.props.authedUser.id === '' ? (
              <Router>
                <Route render={() => (
                  <Login />
                )} /></Router>
            ) : (

              <Router>
                <Header
                  isToggle={this.state.isToggle}
                  setToggle={this.setToggle}
                />
                <Switch>
                  <Route path='/' exact component={Home} />
                  <Route path='/add' component={CreateQuestion} />
                  <Route path='/leaderboard' component={LeaderBoard} />
                  <Route path='/questions/:questionId' component={Question} />
                  <Route component={NotFound} />
                </Switch>
              </Router>
            )
          }
        </div>
        <Footer />
      </div >
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser: authedUser !== undefined ? authedUser : ''
  };
}
export default connect(mapStateToProps)(App)
