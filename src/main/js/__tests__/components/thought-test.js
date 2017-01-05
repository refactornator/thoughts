import React from 'react';
import renderer from 'react-test-renderer';
import Thought from '../../components/thought';

test('Thought renders correctly', () => {
    const thought = {
        text: "This is a thought.",
        creationTime: "2017-01-05T20:19:27.927+0000"
    };

    const tree = renderer.create(
        <Thought thought={thought}></Thought>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});