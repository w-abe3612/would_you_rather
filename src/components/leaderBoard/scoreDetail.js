const scoreDetail = (props) => {
    return (
        <table class="m-content__score_detail">
            <tr>
                <th>Answered questions</th>
                <td>{props.answerCount}</td>
            </tr>
            <tr>
                <th>Created questions</th>
                <td>{props.questionCount}</td>
            </tr>
        </table>
    )
}

export default scoreDetail