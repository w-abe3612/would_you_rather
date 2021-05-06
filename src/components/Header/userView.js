import React, { Component } from 'react'
import { connect } from 'react-redux'

function userView () {
    return (
        <button class="m-content__hamburger_btn" type="button" data-toggle="true">
            <div data-position = "top" ></div>
            <div data-position = "mid" ></div>
            <div data-position = "bottom" ></div>
        </button>
    )   
}

export default userView