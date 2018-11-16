import React, { Component } from 'react';
import PropTypes from 'prop-types';

export const Projects = [
    { article: 'Beast Creature', author: 'Adam Smith', codepenURL: 'https://codepen.io/Adamws33/pen/KZQxwJ', date: '1/1/11'},
    { article: 'Another Beast', author: 'Allison Summers', codepenURL: 'https://codepen.io/alsummers/pen/vpjXOX', date: '1/1/11'},
    { article: 'Beast 3', author: 'Andres Martin', codepenURL: 'https://codepen.io/dreMartin/pen/eyVLGN', date: '1/1/11'},
    { article: 'The Pale Horse', author: 'Andrew Gunst', codepenURL: 'https://codepen.io/agunst99/pen/RxMYOM', date: '1/1/11'},
]

export default class PropsDemo extends Component {
    constructor(props) {
        super(props)
        console.log('PropsDemo class:', props);
        this.state = { projects: Projects };
        console.log('State check:', this.state.projects);
    }

    render() {
        const works = this.state.projects.map((projects, i) => {
            console.log('Project', projects);
            console.log('Index', i);
            return (
                <div key={i}>
                    <Article key={i} article={projects.article}/>
                    <Author key={i} author={projects.author}/>
                    <CodepenURL key={i} codepenURL={projects.codepenURL}/>
                    <Date key={i} date={projects.date}/>
                    <hr />
                </div>
            );
        })

        return (
            <div className="main">
                <div className="mainDiv">
                    <h2>Projects List</h2>

                    <hr />
                    <hr />

                    <div>
                        {works}
                    </div>

                    <hr />

                </div>
            </div>
        );
    }
}


class Article extends React.Component {
    render() {
        return (
            <p>
                {this.props.article}
            </p>
        );
    }
}

class Author extends React.Component {
    render() {
        return (
            <p>
                {this.props.author}
            </p>
        );
    }
}

class CodepenURL extends React.Component {
    render() {
        return (
            <p>
                {this.props.codepenURL}
            </p>
        );
    }
}

class Date extends React.Component {
    render() {
        return (
            <p>
                {this.props.date}
            </p>
        )
    }
}


PropsDemo.propTypes = {
    title: PropTypes.string.isRequired,
    article: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    codepenURL: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
}

PropsDemo.defaultProps = {
    title: 'Hola Accesorios',
    article: 'format-example',
    author: 'Jane Doe',
    codepenURL: 'www.codepen.com',
    date: "##/##/###"
}
