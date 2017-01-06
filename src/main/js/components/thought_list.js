import React from 'react';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        var thoughts = this.props.thoughts.map((thought, index) =>
            <Thought key={index} thought={thought}/>
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