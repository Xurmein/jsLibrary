import React from 'react';
import JSXCompiler from '../JSXCompiler';

const JSXRules = () => {
    return (
        <div className="main">
            <div className="mainDiv">
                <h1 className="section-title">JSX</h1>
                <dl>
                    <dt>Resembles HTML</dt>
                    <dd>But it's not HTML, closer to JS.</dd>
                    <dt>React.createElement()</dt>
                    <dd>Used to construct nad update DOM (aka, what's displayed to the screen).</dd>
                    <dt>Not Required</dt>
                    <dd>Although one can write in vanilla JS, most folks use JSX instead.</dd>
                </dl>
                
                <hr />

                <h1>Egghead.io's JSX Compiler</h1>
                <JSXCompiler />
            </div>
        </div>
    );
}

export default JSXRules;