import React, { Component } from 'react'
import { connect } from 'react-redux'

class SelectUsers extends Component {
    state = {
        selected:'',
        isOpen:false
    }
    handleOnClick = (e) => {
        this.props.selectLoginUser(e.target.id)
        this.setState({
            selected:e.target.value !== undefined?e.target.value:this.state.selected,
            isOpen:false
        })

    }
    openSelectBox = (e) => {
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {
        return (
            <div className="m-select_user" >
                <div 
                    className="m-selectedBox" 
                    onClick={this.openSelectBox}
                >
                    { this.state.selected === ''?
                        "Please select a user":
                        this.state.selected }
                </div>
                <ul className="m-users" >

                    {this.props.users !== undefined && this.state.isOpen === true &&
                        this.props.users.map((user) => (
                            <li 
                                key={user.id}
                                data-iscurrent={this.state.selected === user.name?true:false}
                            >
                                <label for={user.id } >
                                    <input 
                                        type="radio"
                                        onClick={this.handleOnClick} 
                                        name="name" 
                                        id={user.id} 
                                        value={user.name}
                                    />
                                    <figure className="m-user_pic">
                                        <img src="{user.avatarURL}" alt="" />
                                    </figure>
                                    <p className="m-user_name">{user.name}</p>
                                </label>
                            </li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

function mapStateToProps({ users }) {
    console.log(Object.values(users))
    return {
        users: Object.values(users)
    }
}

export default connect(mapStateToProps)(SelectUsers)