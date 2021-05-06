import React, { Component } from 'react'
import { connect } from 'react-redux'

function sideMenu () {
    return (
        <section class="m-toggle_menu" role="switch" aria-checked="true">
                <div class="m-toggle_menu__inner" >
                    <p class="m-user">Hello, Sarah Edo</p>
                    <figure class="m-user_pic">
                        <img src="" />
                    </figure>
                    <nav class="m-nav">
                        <ul class="m-menu">
                            <li><a href="">Home</a></li>
                            <li><a href="">New Question</a></li>
                            <li><a href="">Leader Board</a></li>
                            <li><a href="">Logout</a></li>
                        </ul>
                    </nav>
                </div>
        </section>
    )   
}

export default sideMenu