import React, { Component } from 'react';

class Clock extends Component {

    constructor(props) {
        super(props)
        this.state = { date: new Date() }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.timerID)
    }

    tick() {
        this.setState({
            date: new Date()
        })
    }

    render() {
        return (
            <div>
                <h1>{this.state.date.toLocaleTimeString()}</h1>
                <SubClock date={this.state.date} />
                <SubSubClock date={this.state.date} />
                <ActionLink />
                <Toggle />
            </div>
        )
    }

}

class SubClock extends Component {

    render() {
        const { date } = this.props

        return (
            <h2>{date.toLocaleTimeString()}</h2>
        )
    }

}

function SubSubClock(props) {
    return <h3>{props.date.toLocaleTimeString()}</h3>
}

class ActionLink extends Component {
    handleClick = (e) => {
        // e.preventDefault()
        console.log('The link was clicked. This is:', this)
    }

    render() {
        return (
            <a href="#" onClick={this.handleClick}>Click Me</a>
        )
    }
}

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = { isToggleOn: true }

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState((state) => ({ isToggleOn: !state.isToggleOn }))
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        )
    }
}

export default Clock