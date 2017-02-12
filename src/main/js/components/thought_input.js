import React from 'react';
import { observer } from 'mobx-react';
import Toggle from 'material-ui/Toggle';
import { Card, CardText } from 'material-ui/Card';
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
    marginBottom: 16
  }
};

@observer
export default class ThoughtInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      thoughtText: localStorage.getItem('thought') || ''
    };

    this.handleThoughtChange = this.handleThoughtChange.bind(this);
  }

  handleThoughtChange(event) {
    const value = event.target.value;
    this.setState({ thoughtText: value });
    localStorage.setItem('thought', value);
  }

  handleNewThought() {
    this.props.store.create(this.state.thoughtText);
    this.setState({
      thoughtText: ''
    });
    localStorage.setItem('thought', '');
  }

  handleToggleChange(event, toggled) {
    this.props.store.selectedCategory = toggled ? 'life' : 'work';
  }

  render() {
    const { store } = this.props;

    return (
      <Card className="thought-input" style={{ zIndex: 100 }}>
        <CardText style={{ padding: '9px 16px 0 16px' }}>
          <textarea
            value={this.state.thoughtText}
            onChange={this.handleThoughtChange}
          />
          <label style={styles.label}>Work</label>
          <Toggle
            label="Life"
            toggled={store.selectedCategory === 'work' ? false : true}
            labelPosition="right"
            onToggle={this.handleToggleChange.bind(this)}
            style={styles.toggle}
          />
          <div style={{ textAlign: 'right', float: 'right' }}>
            <RaisedButton
              className="remember-button"
              primary={true}
              label="Remember"
              onClick={this.handleNewThought.bind(this)}
            />
          </div>
        </CardText>
      </Card>
    );
  }
}