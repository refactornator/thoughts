import React from 'react';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThoughtInput from '../../components/thought_input';

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