import React from 'react';
import Clock from './walkthrough/Clock';
import Timer from './timers/Timer';
import StopWatch from './timers/StopWatch';

const TimePieces = () => {
    return (
        <div className="main">
            <div className="mainDiv">
            <h1>Time-keeping Apps</h1>
            <hr /><hr />
                <Clock />
                <hr />
                <Timer />
                <hr />
                <StopWatch />
            </div>
        </div>
    );
}

export default TimePieces;