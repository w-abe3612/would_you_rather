import React, { Component } from 'react'
import { connect } from 'react-redux'

function HamburgerBtn () {
    return (
        <button className="m-content__hamburger_btn" type="button" data-toggle="true">
            <div data-position = "top" ></div>
            <div data-position = "mid" ></div>
            <div data-position = "bottom" ></div>
        </button>
    )   
}

export default HamburgerBtn