class Home extends Component{
    render(){
        return(
<section class="m-home">
            <div class="m-menu_wrap">
                <ul class="m-tabs">
                    <li>Unansswered Questions</li>
                    <li>Answered Questions</li>
                </ul>
                <div class="m-panels">
                    <ul class="m-panel">
                        <li class="m-panel__item">
                            <header class="inner_header">
                                Sarah Edo asks:
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
                                    <p class="m-question_word">be a front-end developer or be a back-end developer</p>
                                    <button class="m-view_poll_btn" type="button">View Poll</button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        )
    }
}

export default Home