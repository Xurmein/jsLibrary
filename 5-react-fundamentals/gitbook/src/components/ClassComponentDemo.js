import React, { Component } from 'react';
import './ClassComponentDemo.css';
import { FaGrin, FaFrown } from "react-icons/fa";

export default class ClassComponentDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { plusCount: 0, minusCount: 0 };
    }
    plusCount = () => {
        this.setState(
            { plusCount: this.state.plusCount + 1 }
        );
    };
    minusCount = () => {
        this.setState(
            { minusCount: this.state.minusCount - 1 }
        );
    };

    render(){
        return (
            <div className="main">
                <div className="mainDiv">
                    <h4>What up, girl?... let me tell you about about...</h4>
                    <ClassComponentNotes />
                    <button onClick={this.plusCount}>
                        <FaGrin />
                        {this.state.plusCount}
                    </button>
                    <h6>Would you like me...?<p>...I'd like me...</p></h6>
                    <button onClick={this.minusCount}>
                        <FaFrown />
                        {this.state.minusCount}
                    </button>
                    <h6>That's right precious...<p>...it will get the hose...</p></h6>
                </div>
            </div>
        );
    }
}

const ClassComponentNotes = function () {
    return (
        <div>
            <h1>Class Components</h1>

            <p>One might consider class components as the "React way" of writing components.</p>
            <dl>
                <dt>ES6 JS Classes</dt>
                <dd>Serve as the base on which a React App is built, a "must understand" concept in React.</dd>
                <dt> !!must extend a component!! </dt>
                <dd>Class components need to extend a React component.</dd>
                <dt>render()</dt>
                <dd>Class components must always have a render method.</dd>
                <dt>export</dt>
                <dd>Only on class component exported per file.</dd>
            </dl>
        </div>
    );
};