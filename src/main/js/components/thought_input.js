import React from 'react';
import Toggle from 'material-ui/Toggle';
import {Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  label: {
    float: 'left',
    marginLeft: 30,
    marginRight: 10,
    marginTop: 8,
    color: 'rgba(0, 0, 0, 0.870588)'
  },
  toggle: {
    marginTop: 7,
    width: null,
    display: 'inline-block',
    marginBottom: 16,
  },
};

export default class ThoughtInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            toggled: this.props.toggled || false,
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
        this.props.newThoughtHandler(this.state.thoughtText, this.state.toggled);
        this.setState({
            thoughtText: ''
        });
        localStorage.setItem('thought', '');
    }

    handleToggleChange(event, toggled) {
        this.setState({
            toggled
        });
        this.props.categoryToggleHandler(toggled);
    }

    render() {
        return (
            <Card className="thought-input" style={{zIndex: 100}}>
                <CardText style={{padding: '9px 16px 0 16px'}}>
                    <textarea value={this.state.thoughtText} onChange={this.handleThoughtChange}/>
                    <label style={styles.label}>Work</label><Toggle
                      label="Life"
                      toggled={this.state.toggled}
                      labelPosition="right"
                      onToggle={this.handleToggleChange.bind(this)}
                      style={styles.toggle}
                    />
                    <div style={{textAlign: 'right', float: 'right'}}>
                        <RaisedButton className="remember-button" primary={true} label="Remember"
                                      onClick={this.handleNewThought.bind(this)}/>
                    </div>
                </CardText>
            </Card>
        )
    }
}