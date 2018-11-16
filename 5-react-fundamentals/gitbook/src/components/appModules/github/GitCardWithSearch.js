import React, { Component } from 'react';
import GitCardList from './GitCardList';
import GitCardSearchForm from './GitCardSearchForm';

class GitCardWithSearch extends Component {
    state = {
        cards: []
    };
    addNewCard = (cardInfo) => {
        this.setState(prevState =>({
            cards: prevState.cards.concat(cardInfo)
        }));
    };
    render() {
        return ( 
            <div className="main">
                <div className="mainDiv">
                    <GitCardSearchForm onSubmit={this.addNewCard} />
                    <GitCardList card={this.state.cards} />
                </div>
            </div>
        );
    }
}

export default GitCardWithSearch;