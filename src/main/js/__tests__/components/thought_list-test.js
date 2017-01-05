import React from 'react';
import renderer from 'react-test-renderer';
import ThoughtList from '../../components/thought_list';

test('ThoughtList renders correctly', () => {
    const thoughts = [{
        text: "This is a thought.",
        creationTime: "2017-01-05T20:19:27.927+0000",
        _links: {
            self: {
                href: 'http://example.com/page/2'
            }
        }
    }];

    const tree = renderer.create(
        <ThoughtList thoughts={thoughts}></ThoughtList>
    ).toJSON();

    expect(tree).toMatchSnapshot();
});