import React from 'react';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import ThoughtList from '../../components/thought_list';

describe('ThoughtList', () => {
    it('renders a list of thoughts correctly', () => {
        const thoughts = [{
            id: 2,
            text: "This is a thought.",
            creationTime: new Date().toISOString(),
            _links: {
                self: {
                    href: 'http://example.com/page/2'
                }
            }
        }];

        const tree = shallow(
            <MuiThemeProvider>
                <ThoughtList thoughts={thoughts} deleteThoughtHandler={() => {}} />
            </MuiThemeProvider>
        );
    });
});
