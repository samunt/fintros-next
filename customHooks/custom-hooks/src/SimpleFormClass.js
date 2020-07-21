import React, {Component} from 'react';

export default class SimpleFormClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        this.setState({email: e.target.value});
    }
    render() {
        return (
            <div>
                <h5>You entered: {this.state.email}</h5>
                <input
                    type='text'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
            </div>
        )
    }
}
