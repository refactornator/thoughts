import React from 'react';
import { observer } from 'mobx-react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Thought from './thought';

@observer
export default class ThoughtList extends React.Component {
  render() {
    const store = this.props.store;
    return (
      <ul className="thoughts">
        <ReactCSSTransitionGroup
          transitionName="thoughts"
          transitionAppear={true}
          transitionAppearTimeout={600}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={400}
        >
          {store.thoughtsBySelectedCategory.map(thought => {
            return <Thought key={thought.id} store={store} thought={thought} />;
          })}
        </ReactCSSTransitionGroup>
      </ul>
    );
  }
}