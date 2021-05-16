import PropTypes from 'prop-types';

const ScoreDetail= (props) => {
    return (
        <table className="m-content__score_detail">
            <tbody>
                <tr>
                    <th>Answered questions</th>
                    <td>{props.answerCount}</td>
                </tr>
                <tr>
                    <th>Created questions</th>
                    <td>{props.questionCount}</td>
                </tr>
            </tbody>
        </table>
    )
}

ScoreDetail.propTypes = {
    answerCount:PropTypes.number.isRequired,
    questionCount:PropTypes.number.isRequired,
}


export default ScoreDetail