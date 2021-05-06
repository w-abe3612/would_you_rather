class Login extends Component {
    render() {
        return (
            <section class="m-login">
                <header class="m-login_header">
                    <h1 class="m-title">Welcome to the Would You Rather App!</h1>
                    <p class="m-subtext">Pease sign in to continue</p>
                </header>

                <div class="inner-box">
                    <figure class="m-top_pic">
                        <img src="./src/img/top_icon.svg" alt="top icon" />
                    </figure>
                    <p class="m-sign-in">Sign in</p>

                    <form action="" class="m-form">

                        <div class="m-select_user">
                            <ul class="m-users">
                                <li>
                                    <label>
                                        <input type="radio" name="name" id="1" />
                                        <div>
                                            <figure class="m-user_pic">
                                                <img src="" alt="" />
                                            </figure>
                                            <p class="m-user_name">Sarah Edo</p>
                                        </div>
                                    </label>
                                </li>
                            </ul>
                        </div>

                        <button class="m-submit" type="button">Submit</button>
                    </form>
                </div>
            </section>
        )
    }
}

export default Login