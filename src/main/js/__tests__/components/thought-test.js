import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Button } from 'semantic-ui-react';
import { Thought } from '../../components/thought';

describe('Thought', () => {
  const thought = {
    id: 1,
    text: 'This is a thought.',
    creationTime: new Date().toISOString()
  };

  it('renders a single thought', () => {
    const renderedThought = renderer
      .create(
        <Thought thought={thought} forgetThought={() => {}} />
      )
      .toJSON();

    expect(renderedThought).toMatchSnapshot();
  });

  describe('when the delete button is pressed', () => {
    it('calls the forgetThought prop callback', () => {
      const forgetThoughtMock = jest.fn();
      const renderedThought = shallow(
        <Thought thought={thought} forgetThought={forgetThoughtMock} />
      );

      renderedThought.find(Button).simulate('click');

      expect(forgetThoughtMock).toBeCalledWith(1);
    });
  });
});
