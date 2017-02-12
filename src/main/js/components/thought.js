import React from 'react';
import moment from 'moment';
import { observer } from 'mobx-react';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

@observer
export default class Thought extends React.Component {
  forgetThought(id) {
    const store = this.props.store;
    store.delete(id);
  }
  render() {
    const { thought } = this.props;
    const sinceHappened = moment(thought.creationTime).fromNow();

    return (
      <li className="thought-card">
        <h6>
          <div className="relative-time">{sinceHappened}</div>
          <IconButton
            className="delete-button"
            iconStyle={{
              color: 'rgba(0, 0, 0, 0.541176)',
              width: 20,
              height: 20
            }}
          >
            <ActionDelete onClick={this.forgetThought.bind(this, thought.id)} />
          </IconButton>
        </h6>
        <p>
          {thought.text}
        </p>
      </li>
    );
  }
}