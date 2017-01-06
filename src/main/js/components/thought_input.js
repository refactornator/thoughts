import React from 'react';

export default class ThoughtInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            thoughtText: ''
        };

        this.handleNewThought = this.handleNewThought.bind(this);
        this.handleThoughtChange = this.handleThoughtChange.bind(this);
    }

    handleThoughtChange(event) {
        this.setState({thoughtText: event.target.value});
    }

    handleNewThought() {
        this.props.newThoughtHandler(this.state.thoughtText);
        this.setState({
            thoughtText: ''
        });
    }

    render() {
        return (
            <div>
                <textarea value={this.state.thoughtText} onChange={this.handleThoughtChange} />
                <button onClick={this.handleNewThought.bind(this)}>Remember</button>
            </div>
        )
    }
}