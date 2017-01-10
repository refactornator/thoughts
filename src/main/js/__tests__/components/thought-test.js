import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Thought from '../../components/thought';

describe('Thought', () => {
    const thought = {
        text: "This is a thought.",
        creationTime: new Date().toISOString()
    };

    it('renders a single thought', () => {
        const thoughtEl = renderer.create(
            <MuiThemeProvider>
                <Thought thought={thought} deleteThoughtHandler={() => {}} />
            </MuiThemeProvider>
        ).toJSON();

        expect(thoughtEl).toMatchSnapshot();
    });

    it('calls the delete handler when the delete button is clicked', () => {
        let deleteHandlerMock = jest.fn();
        const thoughtEl = shallow(
            <Thought
                thought={thought}
                deleteThoughtHandler={deleteHandlerMock.bind(this, '/api/stuff/1')}
            />
        );

        thoughtEl.find('ActionDelete').simulate('click');

        expect(deleteHandlerMock).toBeCalledWith('/api/stuff/1');
    });
});
