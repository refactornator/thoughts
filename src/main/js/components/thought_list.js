import React from 'react';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        var thoughts = this.props.thoughts.map(thought =>
            <Thought key={thought._links.self.href} thought={thought}/>
        );
        return (
            <table>
                <tbody>
                <tr>
                    <th>Text</th>
                    <th>Timestamp</th>
                </tr>
                {thoughts}
                </tbody>
            </table>
        )
    }
}