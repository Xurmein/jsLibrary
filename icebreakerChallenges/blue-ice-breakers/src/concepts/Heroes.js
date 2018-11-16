import React, { Component } from 'react';
import DisplayHero from './DisplayHero';

class Heroes extends Component {
    constructor(props){
        super(props);
        this.state = {
            heroes: [
                {name: 'Clark Kent', powers: 'flight', age: 33},
                {name: 'Bruce Wayne', powers: '$', age: 41}
            ]
        }
    }
  
    render(){
    return (
        <div>
            <DisplayHero heroes={this.state.heroes} />
        </div>
        );
    }
}

export default Heroes;