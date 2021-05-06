import React, { Component } from 'react'
import { connect } from 'react-redux'
import navLinks from './navLinks'
import userView from './userView'
import hamburgerBtn from './hamburgerBtn'
import sideMenu from './sideMenu'

class Header extends Component{
    render(){
        return(
            <header class="m-header">
                <h1 class="m-header__title">Would You Rather?</h1>
                <section class="m-content">
                    <navLinks/>
                    <userView />
                    <hamburgerBtn />
                </section>
                <sideMenu />
            </header>
        )
    }
}

export default Header