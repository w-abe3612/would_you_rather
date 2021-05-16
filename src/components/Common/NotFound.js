import React, { Component } from 'react';

export class NotFound extends Component {
    render() {
        return (
            <section className="m-not_found">
                <header className="inner-header">
                    <h2>Not Found 404 Error</h2>
                </header>
                <div className="inner_box">
                    <p>The page you were looking for was not found.</p>
                </div>
            </section>
        );
    }
}

export default NotFound;