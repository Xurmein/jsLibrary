import React from 'react';
import GitCardWithSearch from './GitCardWithSearch'; 
import { GithubUserData } from './github_user';

const GitCardApp = function () {
    return (
        <div className="main">
            <div className="mainDiv">
                <GitCardWithSearch />
            </div>
        </div>
    );
}

export default GitCardApp;