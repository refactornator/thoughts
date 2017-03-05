import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Thought } from '../../components/thought';

describe('Thought', () => {
  const thought = {
    text: 'This is a thought.',
    creationTime: new Date().toISOString()
  };

  it('renders a single thought', () => {
    const thoughtEl = renderer
      .create(
        <MuiThemeProvider>
          <Thought thought={thought} forgetThought={() => {}} />
        </MuiThemeProvider>
      )
      .toJSON();

    expect(thoughtEl).toMatchSnapshot();
  });
});
