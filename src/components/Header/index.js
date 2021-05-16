import React, { Component } from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'
import PropTypes from 'prop-types';
import UserView from './UserView'
import HamburgerBtn from './HamburgerBtn'
import SlideMenu from './SlideMenu'
import { handleLogoutUser } from '../../actions/authedUser'

class Header extends Component {

    logoutUser = () => {
        const { dispatch } = this.props
        dispatch(handleLogoutUser())
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
                        isToggle={this.props.isToggle}
                        setToggle={this.props.setToggle}
                    />
                </section>
                <SlideMenu
                    loginUser={this.props.loginUser}
                    isToggle={this.props.isToggle}
                    logoutUser={this.logoutUser}
                    setToggle={this.props.setToggle}
                />
            </header>
        )
    }
}

Header.propTypes = {
    setToggle:PropTypes.func.isRequired,
    isToggle:PropTypes.bool.isRequired,
}

function mapStateToProps({ authedUser, users }) {
    const loginUser = (Object.values(users)
        .filter(user => authedUser.id.includes(user.id)))[0]

    return {
        loginUser
    }
}

export default connect(mapStateToProps)(Header)