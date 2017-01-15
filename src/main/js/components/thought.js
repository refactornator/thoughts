import React from 'react';
import moment from 'moment';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Thought extends React.Component {
    render() {
        const style = Object.assign({}, {marginTop: 10});
        const sinceHappened = moment(this.props.thought.creationTime).fromNow();
        return (
            <Card style={style}>
                <CardHeader subtitle={sinceHappened} style={{height: 20}}>
                    <IconButton className="delete-button" iconStyle={{color: 'rgba(0, 0, 0, 0.541176)', width: 20, height: 20}}>
                        <ActionDelete onClick={this.props.deleteThoughtHandler} />
                    </IconButton>
                </CardHeader>
                <CardText>
                    {this.props.thought.text}
                </CardText>
            </Card>
        )
    }
}