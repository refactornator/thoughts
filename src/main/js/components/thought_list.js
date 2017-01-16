import React from 'react';

import Thought from './thought';

export default class ThoughtList extends React.Component {
    render() {
        return (
            <ul className="thoughts">
                {this.props.thoughts.map(({key, style, data}) => {
                    let deleteThoughtHandler = this.props.deleteThoughtHandler.bind(this, data._links.self.href);
                    return <Thought
                        key={key}
                        style={style}
                        thought={data}
                        deleteThoughtHandler={deleteThoughtHandler}
                    />;
                })}
            </ul>
        )
    }
}
