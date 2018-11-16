import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
// import Heroes from '../concepts/Heroes';
// import Swapi from '../Challenge2/Swapi.js';
import Ghibli from "../Challenge3/GhibliAPI";


const Sidebar = () => {
  return(
    <div className="sidebar-styling">
      <ul className="sidebar-list">
        {/* <li><Link to="/day1">Day 1 Challenge</Link></li> */}
        {/* <li><Link to="/day2">Day 2 Challenge</Link></li> */}
        <li><Link to="/day3">Day 3</Link></li>
      </ul>
      <div className="sidebar-routes">
        <Switch>
          <Route exact path="/day3"><Ghibli /></Route>
          {/* <Route exact path="/day2"><Swapi /></Route> */}
          {/* <Route exact path="/day1"><Heroes /></Route> */}
        </Switch>
      </div>
    </div>
  )
}

export default Sidebar;