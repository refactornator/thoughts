import React from 'react';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

export default class ThoughtInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            thoughtText: localStorage.getItem('thought') || ''
        };

        this.handleNewThought = this.handleNewThought.bind(this);
        this.handleThoughtChange = this.handleThoughtChange.bind(this);
    }

    handleThoughtChange(event) {
        const value = event.target.value;
        this.setState({thoughtText: value});
        localStorage.setItem('thought', value);
    }

    handleNewThought() {
        this.props.newThoughtHandler(this.state.thoughtText);
        this.setState({
            thoughtText: ''
        });
    }

    render() {
        return (
            <Card>
                <CardText>
                    <textarea value={this.state.thoughtText} onChange={this.handleThoughtChange}/>
                    <div style={{textAlign: 'right'}}>
                        <RaisedButton className="remember-button" primary={true} label="Remember"
                                      onClick={this.handleNewThought.bind(this)}/>
                    </div>
                </CardText>
            </Card>
        )
    }
}