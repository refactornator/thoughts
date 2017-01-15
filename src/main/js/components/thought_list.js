import React from 'react';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        return (
          <div className="thoughts">
            {this.props.thoughts.filter(thought => {
                return thought.category === this.props.category;
            }).map(thought => {
                let deleteThoughtHandler = this.props.deleteThoughtHandler.bind(this, thought._links.self.href);
                return <Thought
                    key={thought.id}
                    thought={thought}
                    deleteThoughtHandler={deleteThoughtHandler}
                />;
            })}
          </div>
        )
    }
}
