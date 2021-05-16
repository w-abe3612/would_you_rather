import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'

function SlideMenu(props) {
    const handleOnClick = (e) => {
        props.setToggle()
        if(e.target.id === 'logout'){
            props.logoutUser()
        }
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
                                <li id='home' onClick={handleOnClick} ><NavLink exact to="/" activeClassName="s-current" >Home</NavLink></li>
                                <li id='add' onClick={handleOnClick} ><NavLink to="/add" activeClassName="s-current"　>New Question</NavLink></li>
                                <li id='leaderboard' onClick={handleOnClick} ><NavLink to="/leaderboard" activeClassName="s-current" >Leader Board</NavLink></li>
                                <li id='logout' onClick={handleOnClick} >Logout</li>
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
    setToggle:PropTypes.func.isRequired,
}


export default SlideMenu