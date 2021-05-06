import React, { Component } from 'react'
import { connect } from 'react-redux'

class navLinks extends Component {
    render() {
        return (
            <nav class="m-content__nav">
                <ul class="m-menu">
                    <li><a href="">Home</a></li>
                    <li><a href="">New Question</a></li>
                    <li><a href="">Leader Board</a></li>
                </ul>
            </nav>
        )
    }
}

export default navLinks