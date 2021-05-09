import React, { Component } from 'react'
import { connect } from 'react-redux'

function answeredScore(props) {
    return (
        <div class="m-score">
            <header class="inner_header">Score</header>
            <div class="inner_box">
                <div class="m-count">{props.total}</div>
            </div>
        </div>
    )
}

export default answeredScore