import React, { Component } from 'react';

export default class SetTimeout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            timer: 10,
            status: 'Start Game',
            isPaused: true,
        };
        this.intervalId = null;
        this.timeoutId = null;
    }

    resetGame = () => {
        clearInterval(this.intervalId);
        clearTimeout(this.timeoutId);
        this.setState({ timer: 10, status: "Start Game", isPaused: true });
    }

    counter = () => {
        this.setState(prevState => ({ timer: prevState.timer - 1 }));
    }

    execTimeout = () => {
        if (!this.state.isPaused) return;

        this.setState({ status: "Started...", isPaused: false });
        this.intervalId = setInterval(this.counter, 1000);

        this.timeoutId = setTimeout(() => {
            clearInterval(this.intervalId);
            this.setState({ status: 'Game Timeout', isPaused: true, timer: 10 });
            alert('Game Timeout');
        }, this.state.timer * 1000);
    }

    pauseGame = () => {
        if (this.state.isPaused) {
            this.execTimeout();
        } else {
            clearInterval(this.intervalId);
            clearTimeout(this.timeoutId);
            this.setState({ status: "Paused", isPaused: true });
        }
    }

    render() {
        return (
            <>
                <button onClick={this.execTimeout}>{this.state.status}</button>
                <button onClick={this.resetGame}>Reset</button>
                <button onClick={this.pauseGame}>{this.state.isPaused ? 'Continue' : 'Pause'}</button>
                <div>{this.state.timer}</div>
            </>
        );
    }
}
