import React, { Component } from 'react'
import { connect } from 'react-redux'

class UserLists extends Component {
    render() {
        console.log(this.props.users);
        return (
            <ul className="m-users">
                {this.props.users !== undefined &&
                    this.props.users.map((user) => (
                        <li key={user.id} >
                            <label for="{user.id}">
                                <input type="radio" name="name" id="{user.id}" />
                                <div>
                                    <figure className="m-user_pic">
                                        <img src="{user.avatarURL}" alt="" />
                                    </figure>
                                    <p className="m-user_name">{user.name}</p>
                                </div>
                            </label>
                        </li>
                    ))
                }
            </ul>
        )
    }
}



function mapStateToProps({ users }) {
    return {
        users: Object.keys(users)
    }
}

export default connect(mapStateToProps)(UserLists)