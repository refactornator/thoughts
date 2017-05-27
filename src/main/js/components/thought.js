import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';
import { List } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';

import { forgetThought } from '../actions';

export class Thought extends React.Component {
  render() {
    const { thought, forgetThought } = this.props;
    const sinceHappened = moment(thought.creationTime).fromNow();

    return (
      <List.Item className="thought-card">
        <div>
          <div className="relative-time">{sinceHappened}</div>
          <Button.Group basic>
            <Button className="delete-button" icon="trash" onClick={forgetThought.bind(this, thought.id)} />
          </Button.Group>
        </div>
        <p>
          {thought.text}
        </p>
      </List.Item>
    );
  }
}

export default connect(({}, props) => props, {
  forgetThought
})(Thought);
