import React from 'react'
import PropTypes from 'prop-types';

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

HamburgerBtn.propTypes = {
    setToggle:PropTypes.func.isRequired,
    isToggle:PropTypes.bool.isRequired,
}

export default HamburgerBtn