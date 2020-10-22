import React, {Component} from 'react';

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
            </div>
        )
    }

}

class SubClock extends Component {

    render() {
        const {date} = this.props

        return (
            <h2>{date.toLocaleTimeString()}</h2>
        )
    }

}

function SubSubClock(props) {
    return <h3>{props.date.toLocaleTimeString()}</h3>
}

export default Clock