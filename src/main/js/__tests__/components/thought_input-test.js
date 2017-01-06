import React from 'react';
import renderer from 'react-test-renderer';
import ThoughtInput from '../../components/thought_input';

test('ThoughtInput renders correctly', () => {
    const tree = renderer.create(
        <ThoughtInput></ThoughtInput>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});