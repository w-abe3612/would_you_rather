import React, { Component } from 'react'
import { connect } from 'react-redux'

function hamburgerBtn() {
    return (
        <div class="m-score">
            <header class="inner_header">Score</header>
            <div class="inner_box">
                <div class="m-count">10</div>
            </div>
        </div>
    )
}

export default hamburgerBtn