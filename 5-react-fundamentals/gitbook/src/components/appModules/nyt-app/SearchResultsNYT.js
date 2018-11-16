import React from 'react';

const SearchResultsNYT = (props) => {
    return(
        <div>
          {props.results.map(result => {
              return (
                  <div key={result._id}>
                  <h2>{result.headline.main}</h2>
                  {result.multimedia.length > 1 ? <img alt="article" src={`http://www.nytimes.com/${result.multimedia[1].url}`} /> : ''}
                  <p>
                      {result.snippet}
                      <br />
                      {result.keywords.length > 0 ? 'Keywords:' : ''}
                  </p>
                  <ul>
                      {result.keywords.map(keyword => <li key={keyword.value}>{keyword.value}</li>)}
                  </ul>
                  <a href={result.web_url}><button>Ch'ch'ch-ch'ch'ch-check it out!</button></a>
                  </div>
              )
          })}
          <div>
              <button onClick={e => props.changePage(e, 'down')}>Previous 10 Results</button>
              <button onClick={e => props.changePage(e, 'up')}>Next 10 Results</button>
          </div>
        </div>
    )
}
export default SearchResultsNYT