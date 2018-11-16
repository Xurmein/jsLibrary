import React, { Component } from 'react';
import HeroButton from './ui/HeroButton';
import VillainButton from './ui/VillainButton';
import data from '../data/heroesAndVillans';


export default class Main extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            mode: '',
        }
        this.toggleHero = this.toggleHero.bind(this);
        this.toggleVillain = this.toggleVillain.bind(this);
    }

    async toggleHero() {
        return this.setState({
            mode: 'hero'
        }, this.mapData()) 
    }

    async toggleVillain() {
        return this.setState({ 
            mode: 'villain'
        }, this.mapData())
    }
    
    mapData() {
        let mapData;
        
        if (this.state.mode === 'hero') {
            mapData = data.filter(character => character.hero === true);
        } else if (this.state.mode === 'villain') {
            mapData = data.filter(character => character.hero === false);
        } else {
            mapData = []
        }

        let renderData = mapData.map(character=> {
            return (
                <div className="results-container">
                    <div className="character-display">
                        <h2>{character.name}</h2>
                        <h6>Real Name: {character.realName}</h6>
                        <p>Universe: {character.universe}</p>
                        <p>Powers:{character.power}</p>
                    </div>
                    <div>
                        <p>Heroes or Villains?</p>
                    </div>  
                </div>              
            )
        })

        this.setState({
            renderData: renderData
        });
    }

    render() {
        return (
            <div>
                <div>
                    <div className="btns" style={leftIndent}>
                        <HeroButton toggleHero={this.toggleHero} />
                        <VillainButton  toggleVillain={this.toggleVillain}/>
                    </div>
                </div>
                <div className="data-display">
                    {this.state.renderData}
                </div>
            </div>
        )
    }
}


let leftIndent = {
    marginLeft: '1em'
}