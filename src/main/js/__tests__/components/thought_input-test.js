import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import MockLocalStorage from 'mock-localstorage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThoughtInput from '../../components/thought_input';

global.localStorage = new MockLocalStorage();

describe('ThoughtInput', () => {
  it('renders a textarea and button for remembering a thought', () => {
    const tree = shallow(
      <MuiThemeProvider>
        <ThoughtInput
          toggled={true}
          categoryToggleHandler={() => {}}
          newThoughtHandler={() => {}}
        />
      </MuiThemeProvider>
    );
  });
});