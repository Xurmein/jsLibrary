import React, { Component } from 'react';
import './DisplayHero.css';


class DisplayHero extends Component {
    constructor(props){
        super(props);
        this.state = {
            heroDex : 0
        }
    }
    toggleHero = () => {
        console.log(this.state.heroDex);
        if(heroDex == 0){
            this.setState(heroDex = 1)
        } else {
            this.setState(heroDex = 0)
        }
    }
    render(){
        const i = this.state.heroDex;
        return (
            <div>
                <table className="table">
                    <tbody>
                    <tr>
                        <td>{this.props.heroes[i].name}</td>
                        <td>{this.props.heroes[i].powers}</td>
                        <td>{this.props.heroes[i].age}</td>                        
                    </tr>
                    </tbody>
                </table>
                <button onClick={this.toggleHero}>Batman VS Superman</button>
            </div>
        )
    }
}

export default DisplayHero;