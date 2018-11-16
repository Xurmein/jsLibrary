import React from 'react';
import GitCard from './GitCard';

const GitCardList = (props) => {
    return (
        <div className="main">
            <div className="mainDiv">
                {props.cards.map(card => <GitCard key={card.id} {...card} />)}
            </div>
        </div>
    )
}

export default GitCardList;