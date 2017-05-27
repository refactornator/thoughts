import React from 'react';
import { connect } from 'react-redux';
import { Radio } from 'semantic-ui-react';
import { Card } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import { createThought, changeThought, changeCategory } from '../actions';

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

export class ThoughtInput extends React.Component {
  handleNewThought() {
    this.props.createThought({
      category: this.props.category,
      text: this.props.thought
    });
  }

  handleToggleChange(event, {checked: toggled}) {
    const newCategory = toggled ? 'life' : 'work';
    this.props.changeCategory(newCategory);
  }

  render() {
    const { category, thought, changeThought } = this.props;
    return (
      <Card className="thought-input" style={{ zIndex: 100, top: 0, width: '100%', position: 'fixed' }}>
        <Card.Content style={{ padding: '9px 16px 0 16px' }}>
          <textarea
            value={thought}
            onChange={event => changeThought(event.target.value)}
          />
          <label style={styles.label}>Work</label>
          <Radio
            toggle
            label="Life"
            checked={category === 'work' ? false : true}
            onChange={this.handleToggleChange.bind(this)}
            style={styles.toggle}
          />
          <div style={{ textAlign: 'right', float: 'right' }}>
            <Button primary className="remember-button" onClick={this.handleNewThought.bind(this)}>
              Remember
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

export default connect(({ category, thought }) => ({ category, thought }), {
  createThought,
  changeThought,
  changeCategory
})(ThoughtInput);
