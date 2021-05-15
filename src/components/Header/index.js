import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'
import UserView from './UserView'
import HamburgerBtn from './HamburgerBtn'
import SlideMenu from './SlideMenu'
import {handleLogoutUser} from '../../actions/authedUser'

class Header extends Component {
    state = {
        isToggle:false
    }

    logoutUser = () => {
        const { dispatch } = this.props
        dispatch(handleLogoutUser())
    }

    setToggle = () =>{
        this.setState({
            isToggle:!this.state.isToggle
        })
    }
    render() {
        return (
            <Fragment>
                { /*this.props.authedUser !== undefined */ true && (
                    <header className="m-header">
                        <h1 className="m-header__title">Would You Rather?</h1>
                        <section className="m-content">
                            <NavLinks />
                            <UserView 
                                logoutUser = {this.logoutUser}
                            />
                            <HamburgerBtn 
                                isToggle={this.state.isToggle} 
                                setToggle ={this.setToggle}
                            />
                        </section>
                        <SlideMenu 
                            isToggle={this.state.isToggle}
                            logoutUser = {this.logoutUser}
                        />
                    </header>
                )}
            </Fragment>
        )
    }
}

function mapStateToProps({ authedUser }) {
    return {
        loading: authedUser === null
    }
}

export default connect(mapStateToProps)(Header)