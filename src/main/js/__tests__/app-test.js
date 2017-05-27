import React from 'react';
import renderer from 'react-test-renderer';

jest.mock('../components/thought_input');
jest.mock('../components/thought_list');
import App from '../app';

describe('App', () => {
  it('renders the Thought Input and the Thought List', () => {
    const renderedApp = renderer
      .create(
        <App />
      )
      .toJSON();
    expect(renderedApp).toMatchSnapshot();
  });
});
