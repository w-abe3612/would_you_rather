import React, { Component } from 'react'
import { connect } from 'react-redux'

function UserView(props) {
    const fct = () => {
        props.logoutUser()
    }
    return (
        <div className="m-content__login">
            <p className="m-user">Hello, Sarah Edo</p>
            <figure className="m-user_pic">
                <img src="" />
            </figure>
            <a className="m-logout_btn" onClick={fct}>Loggout</a>
        </div>
    )
}

export default UserView