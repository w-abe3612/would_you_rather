import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'
import UserView from './UserView'
import HamburgerBtn from './HamburgerBtn'
import SlideMenu from './SlideMenu'
import { handleLogoutUser } from '../../actions/authedUser'

class Header extends Component {
    state = {
        isToggle: false
    }

    logoutUser = () => {
        const { dispatch } = this.props
        dispatch(handleLogoutUser())
    }

    setToggle = () => {
        this.setState({
            isToggle: !this.state.isToggle
        })
    }
    render() {
        return (
            <header className="m-header">
                <h1 className="m-header__title">Would You Rather?</h1>
                <section className="m-content">
                    <NavLinks />
                    <UserView
                        loginUser={this.props.loginUser}
                        logoutUser={this.logoutUser}
                    />
                    <HamburgerBtn
                        isToggle={this.state.isToggle}
                        setToggle={this.setToggle}
                    />
                </section>
                <SlideMenu
                    loginUser={this.props.loginUser}
                    isToggle={this.state.isToggle}
                    logoutUser={this.logoutUser}
                    setToggle={this.setToggle}
                />
            </header>
        )
    }
}

function mapStateToProps({ authedUser, users }) {
    const loginUser = (Object.values(users)
        .filter(user => authedUser.id.includes(user.id)))[0]

    return {
        loginUser
    }
}

export default connect(mapStateToProps)(Header)