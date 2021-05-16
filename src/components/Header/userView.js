import React from 'react'
import PropTypes from 'prop-types';
import UserPic from '../Common/UserPic'


function UserView(props) {
    const handleOnClick = () => {
        props.logoutUser()
    }
    return (
        <div className="m-content__login">
            <p className="m-user">Hello, {props.loginUser.name}</p>
            <UserPic userIcon={props.loginUser.avatarURL} />
            <div className="m-logout_btn" onClick={handleOnClick}>Loggout</div >
        </div>
    )
}

UserPic.UserView = {
    loginUser: PropTypes.object.isRequired,
    logoutUser: PropTypes.func.isRequired,
}

export default UserView