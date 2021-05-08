import React, { Component } from 'react'
import { connect } from 'react-redux'
import UserPic from '../Common/UserPic'

function SlideMenu () {
    return (
        <section className="m-toggle_menu" role="switch" aria-checked="true">
                <div className="m-toggle_menu__inner" >
                    <p className="m-user">Hello, Sarah Edo</p>
                    <UserPic />
                    <nav className="m-nav">
                        <ul className="m-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">New Question</a></li>
                            <li><a href="">Leader Board</a></li>
                            <li><a href="">Logout</a></li>
                        </ul>
                    </nav>
                </div>
        </section>
    )   
}

export default SlideMenu