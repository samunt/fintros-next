import React, {Component} from 'react';

export default class CounterClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        this.increment = this.increment.bind(this)
    }
    increment() {
        this.setState({count: this.state.count + 1})
    }
    render() {
        return (
            <div>
                <h5>The count is {this.state.count}</h5>
                <button onClick={this.increment}>INCREMENT</button>
            </div>
        )
    }
}
