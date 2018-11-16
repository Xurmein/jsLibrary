import React from "react";
import {
    Route,
    Link,
    Switch
 } from "react-router-dom";
import Home from "./Home";
import Resources from "./Resources";
import FunctionalComponentDemo from '../concepts/FunctionalComponentDemo.js';
import JSXRules from "../concepts/JSXRules";
import LifeCycleDiagram from "../concepts/LifeCycleDiagram";
import ClassComponentDemo from "../ClassComponentDemo";
import PropsDemo from "../PropsDemo";
import NYT from "../appModules/nyt-app/NewYorkTimes";
import TimePieces from "../appModules/clocks/TimePiecesApp";
import ConceptsApp from "../appModules/checklist-app/ReactConceptsApp";
import Video from "../appModules/YouTubeSearchApp/Video";
// import GitCardApp from '../appModules/github/GitCardApp';


const Sidebar = () => (
    <div className="sidebar">
        <div className="sidebar-list-styling">
            <ul className="sidebar-list list-unstyled">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/functionalcomponent">Functional Component</Link></li>
                <li><Link to="/resources">Resources</Link></li>
                <li><Link to="/jsxrules">JSX Rules</Link></li>
                <li><Link to="/classcomponent">Class Component Demo</Link></li>
                <li><Link to="/lifecyclediagram">Component Life Cycle</Link></li>
                <li><Link to="/propsdemo">Props Demo</Link></li>
                <li><Link to="/timepieces">Time-related Apps</Link></li>
                <li><Link to="/newyorktimes">NYT Video Search App</Link></li>
                <li><Link to="/conceptsapp">React Concepts Checklist</Link></li>
                <li><Link to="/videosearch">YouTube Video Search</Link></li>
                {/* <li><Link to="/githubsimpleapi">Github User Search App</Link></li> */}
            </ul>
        </div>
        <div className="sidebar-route">
            <Switch>
                <Route exact path="/home"><Home /></Route>
                <Route exact path="/resources"><Resources /></Route>
                <Route exact path="/functionalcomponent"><FunctionalComponentDemo /></Route>
                <Route exact path="/jsxrules"><JSXRules /></Route>
                <Route exact path="/classcomponent"><ClassComponentDemo /></Route>
                <Route exact path="/lifecyclediagram"><LifeCycleDiagram /></Route>
                <Route exact path="/propsdemo"><PropsDemo /></Route>
                <Route exact path="/timepieces"><TimePieces /></Route>
                <Route exact path="/newyorktimes"><NYT /></Route>
                <Route exact path="/conceptsapp"><ConceptsApp /></Route>
                <Route exact path="/videosearch"><Video /></Route>
                {/* <Route exact path="/githubsimpleapi"><GitCardApp /></Route> */}
                <Route exact path="/"><Home /></Route>
            </Switch>
        </div>
    </div>
);

export default Sidebar;