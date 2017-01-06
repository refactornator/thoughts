import React from 'react';
import renderer from 'react-test-renderer';
import ThoughtInput from '../../components/thought_input';

describe('ThoughtInput', () => {
    it('renders a textarea and button for remembering a thought', () => {
        const tree = renderer.create(
            <ThoughtInput></ThoughtInput>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});