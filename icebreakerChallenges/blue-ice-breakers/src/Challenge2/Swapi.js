// import React, { Component } from 'react';
// // import SwapiResults from '../Challenge2/SwapiResults';

// const baseURL = 'https://swapi.co/api/';
// const ships = 'starships/';
// const planets = 'planets/';

// export default class Swapi extends Component {
//     constructor(props) {
//         super(props);
//             this.state = {
//                 shipBtn: false,
//                 planetBtn: false,
//                 results: []
//             };
//         }
//     handleSubmit = (event) => {
//         this.fetchResults();
//         event.preventDefault();
//     }
//     fetchResults = (onClick) => {
//         let shipData = `${baseURL} + ${ships}`
//         let planetData = `${baseURL} + ${planets}`
    
//         fetch()
//     }
//     showShips = (e, shipBtn) => {
//         e.preventDefault();
//         if (shipBtn === true){
//             this.setState({shipBtn : false})
//         } else {
//             this.setState({shipBtn : true})
//         }
//     }
//     showPlanets = (e, planetsBtn) => {
//         e.preventDefault();
//         if(planetsBtn === true){
//             this.setState({planetBtn : false})
//         } else {
//             this.setState({planetBtn : true})
//         }
//     }
//     render() {
//         return (
//             <div className="main">
//                 <div className="mainDiv">
//                     <button onClick={e => props.showShips(e, true)} name="shipBtn">
//                         Starships!
//                     </button>
//                     <button onClick={e => props.showPlanets(e, true)} name="planetBtn">
//                         Planets!
//                     </button>
//                 </div>
//             </div>
//         )
//     }
// }

import React from 'react';
import SwapiResults from './SwapiResults';

export default class Swapi extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            mode: '',
            displayData: []
        }
    }

    render() {
        return (
            <div>
                <SwapiResults />
            </div>
        )
    }
}