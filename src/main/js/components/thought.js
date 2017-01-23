import React from 'react';
import moment from 'moment';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import { Card, CardHeader, CardText } from 'material-ui/Card';

export default class Thought extends React.Component {
  render() {
    const sinceHappened = moment(this.props.thought.creationTime).fromNow();

    return (
        <li className="thought-card">
            <h6>
                <div className="relative-time">{sinceHappened}</div>
                <IconButton className="delete-button" iconStyle={{
                    color: 'rgba(0, 0, 0, 0.541176)',
                    width: 20,
                    height: 20
                }}>
                    <ActionDelete onClick={this.props.deleteThoughtHandler} />
                </IconButton>
            </h6>
            <p>
                {this.props.thought.text}
            </p>
        </li>
    )
  }
}
