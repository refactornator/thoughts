import React from 'react';
import ActionDelete from 'material-ui/svg-icons/action/delete';
import IconButton from 'material-ui/IconButton';
import {Card, CardHeader, CardText} from 'material-ui/Card';

export default class Thought extends React.Component {
    render() {
        return (
            <Card style={{marginTop: 10}}>
                <CardHeader subtitle={this.props.thought.creationTime} style={{height: 20}}>
                    <IconButton className="delete-button">
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