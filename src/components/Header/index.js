import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import NavLinks from './NavLinks'
import UserView from './UserView'
import HamburgerBtn from './HamburgerBtn'
import SlideMenu from './SlideMenu'

class Header extends Component {
    render() {
        return (
            <Fragment>
                { /*this.props.authedUser !== undefined */ true&& (
                    <header className="m-header">
                        <h1 className="m-header__title">Would You Rather?</h1>
                        <section className="m-content">
                            <NavLinks />
                            <UserView />
                            <HamburgerBtn />
                        </section>
                        <SlideMenu />
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