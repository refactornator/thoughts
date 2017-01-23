import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        return (
            <ul className="thoughts">
                <ReactCSSTransitionGroup
                  transitionName="thoughts"
                  transitionAppear={true}
                  transitionAppearTimeout={600}
                  transitionEnterTimeout={600}
                  transitionLeaveTimeout={400}>
                    {this.props.thoughts.map(thought => {
                        let deleteThoughtHandler = this.props.deleteThoughtHandler.bind(this, thought._links.self.href);
                        return <Thought
                            key={thought.id}
                            thought={thought}
                            deleteThoughtHandler={deleteThoughtHandler}
                        />;
                    })}
                </ReactCSSTransitionGroup>
            </ul>
        )
    }
}
