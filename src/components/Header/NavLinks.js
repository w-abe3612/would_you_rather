import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class NavLinks extends Component {
    render() {
        return (
            <nav className="m-content__nav">
                <ul className="m-menu">
                    <li><NavLink exact　to="/" activeClassName="s-current" >Home</NavLink></li>
                    <li><NavLink to="/add"　activeClassName="s-current"　>New Question</NavLink></li>
                    <li><NavLink to="/leaderboard" activeClassName="s-current" >Leader Board</NavLink></li> 
                </ul>
            </nav>
        )
    }
}

export default NavLinks