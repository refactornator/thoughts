import React from 'react';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        const thoughts = this.props.thoughts.map((thought, index) => {
            let deleteThoughtHandler = this.props.deleteThoughtHandler.bind(this, thought._links.self.href);
            return (
                <Thought
                    key={index}
                    thought={thought}
                    deleteThoughtHandler={deleteThoughtHandler}
                />
            );
        });
        return (
            <table>
                <tbody>
                <tr>
                    <th>Text</th>
                    <th>Timestamp</th>
                    <th>Delete</th>
                </tr>
                {thoughts}
                </tbody>
            </table>
        )
    }
}
