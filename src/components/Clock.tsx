import React from 'react';

interface ClockState{
    time: Date;
}

export default class Clock extends React.Component<{}, ClockState>{
    state = {time: new Date()};
    timerId!: NodeJS.Timer;

    componentDidMount() {
        this.timerId = setInterval(() => {this.setState({time: new Date()})}, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    render() {
        return (
            <div>
                {"Idő: " + this.state.time}
            </div>
        )
    }
}