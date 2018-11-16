import React, {Component} from 'react';
import GhibliResults from "./GhibliResults"

const baseURL = 'https://ghibliapi.herokuapp.com/films/';

class Ghibli extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            results: []
        }
    }
    componentDidMount(){
        fetch(baseURL)
        .then(response => {
            return response.json()
        })
        .then(json => {
            this.setState({
                title: 'title',
                results: json.results
            })
        })
    }
    render(){
        return(
            <div>
                <GhibliResults />
            </div>
        )
    }
}

export default Ghibli;