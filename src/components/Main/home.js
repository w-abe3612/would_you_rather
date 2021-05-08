import React, { Component,Fragment } from 'react'
import { connect } from 'react-redux'

class Home extends Component {
    render() {
        return (
            <section className="m-home">
                <div className="m-menu_wrap">
                    <ul className="m-tabs">
                        <li>Unansswered Questions</li>
                        <li>Answered Questions</li>
                    </ul>
                    <div className="m-panels">
                        <ul className="m-panel">
                            <li className="m-panel__item">
                                <header className="inner_header">
                                    Sarah Edo asks:
                            </header>
                                <div className="inner_box">
                                    <figure className="m-user_pic">
                                        <img src="" alt="" />
                                    </figure>
                                    <div className="m-content">
                                        <p className="m-watchword">Would You Rather ...</p>
                                        <figure className="m-user_pic">
                                            <img src="" alt="" />
                                        </figure>
                                        <p className="m-question_word">be a front-end developer or be a back-end developer</p>
                                        <button className="m-view_poll_btn" type="button">View Poll</button>
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