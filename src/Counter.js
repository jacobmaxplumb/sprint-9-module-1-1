import { Component } from "react";

const handleLog = () => {
    console.log('hello');
}

export class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            increment: 1
        }
    }

    handleIncrementChange = (e) => {
        this.setState({ increment: Number(e.target.value)})
    }

    addToCount = () => {
        this.setState({count: this.state.count + this.state.increment})
    }

    render() {
        return <>
            <h4>{this.state.count}</h4>
            <input onChange={this.handleIncrementChange} value={this.state.increment} />
            <button onClick={this.addToCount}>Add To Count</button>
            <button onClick={handleLog}>Log Stuff</button>
        </>
    }
}