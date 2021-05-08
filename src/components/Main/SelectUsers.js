import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserLists from './UserLists'

class SelectUsers extends Component {
    render() {
        return (
            <div className="m-select_user">
                <input type="text" className="" value="" />
                <UserLists />
            </div>
        )
    }
}

export default SelectUsers