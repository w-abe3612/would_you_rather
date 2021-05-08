import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import {connect} from 'react-redux'
import {handleInitialData} from '../actions/shared'
import Header from './Header'
import Create from './Create'
import leaderBoard from './leaderBoard'
import Main from './Main'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
          <div className='l-layout'>
            <Header />
            <Route path='/' exact component={Main} />
            {/*<Route path='/add' component={createQuestion} />
    <Route path='/leaderboard' component={leaderBoard} />*/}
          </div>
      </Router>
    )
  }
}

function mapStateToProps (state) {
  return state
}
export default connect(mapStateToProps)(App)
