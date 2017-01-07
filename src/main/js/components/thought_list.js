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
            <div>
                {thoughts}
            </div>
        )
    }
}
