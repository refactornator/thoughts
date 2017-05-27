import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { Radio } from 'semantic-ui-react';
import { ThoughtInput } from '../../components/thought_input';

describe('ThoughtInput', () => {
  it('renders a textarea and button for saving a thought', () => {
    const renderedThought = renderer
      .create(
        <ThoughtInput category="work" thought="" changeThought={() => {}} />
      )
      .toJSON();
    expect(renderedThought).toMatchSnapshot();
  });

  describe('when the category is changed', () => {
    it('calls the changeCategory function', () => {
      const changeCategoryMock = jest.fn();
      const renderedThoughtInput = shallow(
        <ThoughtInput
          category="work"
          thought=""
          changeCategory={changeCategoryMock}
          changeThought={() => {}}
          createThought={() => {}}
        />
      );
      renderedThoughtInput
        .find(Radio)
        .simulate('change', {}, { checked: true });
      expect(changeCategoryMock).toBeCalledWith('life');
    });
  });

  describe('when the textarea is changed', () => {
    it('calls the changeThought function', () => {
      const changeThoughtMock = jest.fn();
      const renderedThoughtInput = shallow(
        <ThoughtInput
          category="work"
          thought=""
          changeCategory={() => {}}
          changeThought={changeThoughtMock}
          createThought={() => {}}
        />
      );
      renderedThoughtInput
        .find('textarea')
        .simulate('change', { target: { value: 'This is a test thought.' } });
      expect(changeThoughtMock).toBeCalledWith('This is a test thought.');
    });
  });

  describe('when the Remember button is pressed', () => {
    it('creates a new thought.', () => {
      const createThoughtMock = jest.fn();
      const renderedThoughtInput = shallow(
        <ThoughtInput
          category="life"
          thought="Why do we drive on the parkway, and park on the driveway?"
          changeCategory={() => {}}
          changeThought={() => {}}
          createThought={createThoughtMock}
        />
      );
      renderedThoughtInput.find('.remember-button').simulate('click');
      expect(createThoughtMock).toBeCalledWith({
        category: 'life',
        text: 'Why do we drive on the parkway, and park on the driveway?'
      });
    });
  });
});
