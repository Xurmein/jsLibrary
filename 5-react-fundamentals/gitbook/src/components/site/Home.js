import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render () {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>Bon nuit, my children of the night, to React Fundamentals</h1>

                    <p>
                        Lorem ipsum;
                    </p>
                    <hr />
                    <h2>Important Notes</h2>
                    <ul>
                        <li>styling is intentionally bland, play with it.</li>
                        <li>site currently not responsive</li>
                        <li>Refactor text, turn into portfolio page</li>
                        <li>we'll just be scratching surface of React capabilities</li>
                        <li>here are <Link to="/resources">some resources</Link> that will be useful</li>
                        <li><Link to="/resources">React Resources</Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}