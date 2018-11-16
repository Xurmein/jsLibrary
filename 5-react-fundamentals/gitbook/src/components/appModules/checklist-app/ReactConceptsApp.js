import React, { Component } from 'react';
import _ from 'lodash';
import { concepts } from './concepts';
import ConceptList from './ConceptList';
import NewConcept from './NewConcept'


export default class ConceptsApp extends Component {
    constructor(){
        super();
        this.state = { concepts: concepts };
    }
    toggleConcept(concepts) {
        let concept = _.find(this.state.concepts, concepts);
        concept.done = !concept.done;
        this.setState({concepts: this.state.concepts});
    }
    createConcept(text) {
        this.state.concepts.push({
            text,
            done: false
        });
        this.setState({concepts: this.state.concepts});
    }
    render () {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h1>React Concepts</h1>
                    <p>Keep track of the React Concepts you've studied:</p>
                    <NewConcept createConcept={this.createConcept.bind(this)} />
                    <h2>General Concepts</h2>
                    <ConceptList concepts={this.state.concepts} toggle={this.toggleConcept.bind(this)} />
                </div>
            </div>
        );
    }
}