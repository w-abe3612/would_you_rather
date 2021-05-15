import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class UserPic extends Component {
    render() {
        return (
            <figure class="m-user_pic">
                <div class="inner_box">
                    <img src="" alt="" />
                </div>
            </figure>
        )
    }
}

//todo:usersからauthedUserの値を参照する
function mapStateToProps ({ users,authedUser }) {
    return {
        users,
        authedUser
    }
  }

export default connect(mapStateToProps)(UserPic)