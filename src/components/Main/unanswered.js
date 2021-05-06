class unanswered extends Component {
    render() {
        return (
            <section class="m-question">
                <header class="inner_header">
                    <h2>Tyler McGinnis asks:</h2>
                </header>
                <div class="inner_box">
                    <figure class="m-user_pic">
                        <img src="" alt="" />
                    </figure>
                    <div class="m-content">
                        <p class="m-watchword">Would You Rather ...</p>
                        <figure class="m-user_pic">
                            <img src="" alt="" />
                        </figure>
                        <form action="" class="m-form">
                            <input type="radio" id="question-01" name="question" class="m-radio-input" />
                            <label for="question-01">be a front-end developer?</label>
                            <input type="radio" id="question-02" name="question" class="m-radio-input" />
                            <label for="question-02">be a front-end developer?</label>
                            <button class="m-submit" type="button">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        )
    }
}

export default unanswered