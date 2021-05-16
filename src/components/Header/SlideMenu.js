import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'

function SlideMenu(props) {
    const handleOnClick = () => {
        props.logoutUser()
    }
    return (
        <Fragment>
            { props.isToggle === true && (
                <section className="m-toggle_menu" data-toggle={props.isToggle} >
                    <div className="m-toggle_menu__inner" >
                        <p className="m-user">Hello, {props.loginUser.name}</p>
                        <UserPic userIcon={props.loginUser.avatarURL} />
                        <nav className="m-nav">
                            <ul className="m-menu">
                                <li><NavLink exact to="/" activeClassName="s-current" >Home</NavLink></li>
                                <li><NavLink to="/add" activeClassName="s-current"　>New Question</NavLink></li>
                                <li><NavLink to="/leaderboard" activeClassName="s-current" >Leader Board</NavLink></li>
                                <li onClick={handleOnClick} >Logout</li>
                            </ul>
                        </nav>
                    </div>
                </section>
            )}
        </Fragment>
    )
}

UserPic.SlideMenu = {
    userIcon:PropTypes.string.isRequired,
    loginUser:PropTypes.object.isRequired,
    isToggle:PropTypes.bool.isRequired,
    logoutUser:PropTypes.func.isRequired,
}


export default SlideMenu