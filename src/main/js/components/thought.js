import React from 'react';

export default class Thought extends React.Component {
    render() {
        return (
            <tr>
                <td>{this.props.thought.text}</td>
                <td>{this.props.thought.creationTime}</td>
            </tr>
        )
    }
}