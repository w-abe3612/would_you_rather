import React from 'react'
import PropTypes from 'prop-types';

function AnsweredScore(props) {
    return (
        <div className="m-score">
            <header className="inner-header">Score</header>
            <div className="inner_box">
                <div className="m-count">{props.total}</div>
            </div>
        </div>
    )
}

AnsweredScore.propTypes = {
    total: PropTypes.number.isRequired,
}

export default AnsweredScore