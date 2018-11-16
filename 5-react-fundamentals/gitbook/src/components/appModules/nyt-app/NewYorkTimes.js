import React, { Component } from 'react';
import SearchResultsNYT from "./SearchResultsNYT";

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'abc4bbfaaef34c9aa5870901ca95db9d';

export default class NYT extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            startDate: '',
            endDate: '',
            pageNumber: 0,
            results: []
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    }

    handleSubmit = (event) => {
        this.fetchResults()
        event.preventDefault()
    }

    fetchResults = () => {
        let url = `${baseURL}?api-key=${key}&page=${this.state.pageNumber}&q=${this.state.search}`
        url = this.state.startDate ? url + `&begin_date=${this.state.startDate}`:url
        url = this.state.endDate ? url + `&end_date=${this.state.endDate}`:url
        fetch(url)
        .then(
            (response) => response.json()
        )
        .then(
            (data) => {
                this.setState({ results: data.response.docs })
        })
    }

    changePageNumber = (e, direction) => {
        e.preventDefault()
        if(direction === 'down') {
            if(this.state.pageNumber > 0) {
                let newPageNumber = this.state.pageNumber -1;
                this.setState({ pageNumber: newPageNumber});
                this.fetchResults();
            }
        }
        if(direction === 'up') {
            let newPageNumber = this.state.pageNumber + 1;
            this.setState({ pageNumber: newPageNumber });
            this.fetchResults();
        }
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <form onSubmit={e => this.handleSubmit(e)}>
                        <span>Your search term (required):</span>
                        <input type="text" name="search" onChange={this.handleChange} required /><br />
                        <span>Start date (optional):</span>
                        <input type="date" name="startDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <span>End date (optional):</span>
                        <input type="date" name="endDate" pattern="[0-9]{8}" onChange={this.handleChange} /><br />
                        <button className="submit">Bada-bing!</button>
                    </form>
                    {this.state.results.length > 0 ? <SearchResultsNYT results={this.state.results} changePage={this.changePageNumber} /> : <div></div>}
                </div>
            </div>
        );
    }
}

//constructor -> render -> setState tracks/updates constructor based on handleChange