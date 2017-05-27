import React from 'react';
import { connect } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { List } from 'semantic-ui-react';

import { requestThoughts } from '../actions';

import Thought from './thought';

export class ThoughtList extends React.Component {
  componentDidMount() {
    this.props.requestThoughts();
  }

  render() {
    const selectedCategory = this.props.category;
    return (
      <List className="thoughts" style={{margin: '0 auto'}}>
        <ReactCSSTransitionGroup
          transitionName="thoughts"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
        >
          {this.props.thoughts
            .filter(thought => thought.category === selectedCategory)
            .map(thought => {
              return <Thought key={thought.id} thought={thought} />;
            })}
        </ReactCSSTransitionGroup>
      </List>
    );
  }
}

export default connect(({ thoughts, category }) => ({ thoughts, category }), {
  requestThoughts
})(ThoughtList);
