import React, { Component } from 'react'
import PropTypes from 'prop-types';

class UserPic extends Component {
    render() {
        return (
            <figure className="m-user_pic">
                <div className="inner-box">
                    <img src={ this.props.userIcon } alt="user icon" />
                </div>
            </figure>
        )
    }
}

UserPic.propTypes = {
    userIcon:PropTypes.string.isRequired,
}

export default UserPic