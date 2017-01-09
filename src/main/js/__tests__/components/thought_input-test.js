import React from 'react';
import renderer from 'react-test-renderer';
import MockLocalStorage from 'mock-localstorage';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThoughtInput from '../../components/thought_input';

global.localStorage = new MockLocalStorage();

describe('ThoughtInput', () => {
    it('renders a textarea and button for remembering a thought', () => {
        const tree = renderer.create(
            <MuiThemeProvider>
                <ThoughtInput />
            </MuiThemeProvider>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});