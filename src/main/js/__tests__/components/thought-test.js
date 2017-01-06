import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import Thought from '../../components/thought';

describe('Thought', () => {
    const thought = {
        text: "This is a thought.",
        creationTime: "2017-01-05T20:19:27.927+0000"
    };

    it('renders a single thought', () => {
        const thoughtEl = renderer.create(
            <Thought thought={thought} deleteThoughtHandler={() => {}} />
        ).toJSON();

        expect(thoughtEl).toMatchSnapshot();
    });

    it('CheckboxWithLabel changes the text after click', () => {
        let deleteHandlerMock = jest.fn();
        const thoughtEl = shallow(
            <Thought
                thought={thought}
                deleteThoughtHandler={deleteHandlerMock.bind(this, '/api/stuff/1')}
            />
        );

        thoughtEl.find('a').simulate('click');

        expect(deleteHandlerMock).toBeCalledWith('/api/stuff/1');
    });
});
