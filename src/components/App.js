import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Header from './Header'
import CreateQuestion from './CreateQuestion'
import Question from './Question'
import LeaderBoard from './LeaderBoard'
import Home from './Home'
import Login from './Login'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <div className = 'l-layout' >
      {/*
            <Router>
        {this.props.authedUser === null ? (
          <Route render={() => (
            <Login />
          )} />
        ) : (
          <div className='l-layout'>
            <Header />
            <Route path='/' exact component={Main} />
          </div>
        )}
      </Router>
      
      */}
      
      <Router>
        
          <Header />
          <Route path='/' exact component={Home} />
          <Route path='/add' component={CreateQuestion} />
          <Route path='/leaderboard' component={LeaderBoard} />
          <Route path='/questions/:questionId' component={Question} />
        
      </Router>
      <a href='https://jp.freepik.com/vectors/business'>Macrovector_official - jp.freepik.com によって作成された business ベクトル</a>
      </div >
    )
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser
  };
}
export default connect(mapStateToProps)(App)
