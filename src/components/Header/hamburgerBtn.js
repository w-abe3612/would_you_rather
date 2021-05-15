import React, { Component } from 'react'
import { connect } from 'react-redux'

function HamburgerBtn (props) {
    const handleOnClick = (e) => {
        props.setToggle()
    }

    return (
        <button 
            className="m-content__hamburger_btn" 
            onClick={handleOnClick} type="button" 
            data-toggle={props.isToggle}>
            <div data-position = "top" ></div>
            <div data-position = "mid" ></div>
            <div data-position = "bottom" ></div>
        </button>
    )   
}

export default HamburgerBtn