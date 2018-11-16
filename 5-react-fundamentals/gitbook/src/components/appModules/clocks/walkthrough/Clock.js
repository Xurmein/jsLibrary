import React from 'react';

export default class Clock extends React.Component {
    constructor(props) {
        super(props);
        var date = this.getTimeString();
        this.state = {
            time: date
        }
    }

    getTimeString() {
        const date = new Date(Date.now()).toLocaleTimeString();
        return date;
    }

    componentDidMount() { //mounts component after data from getTimeString() is returned; like promise/.fetch 
        const _this = this; //sets this to _this to escape local scope in function below;
        this.timer = setInterval(function () {
            var date = _this.getTimeString();
            _this.setState({
                time: date
            })
        }, 1000) //rate at which requests are made to get data
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                    <h2>React Clock</h2>
                    <hr className="explanation" />
                    <p>{this.state.time}</p>
                </div>
            </div>
        )
    }
}