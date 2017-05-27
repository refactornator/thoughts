import React from 'react';
import ReactDOM from 'react-dom';
import { Container } from 'semantic-ui-react';

import configureStore from './configureStore';
import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

export default class App extends React.Component {
  render() {
    return (
      <Container>
        <ThoughtInput />
        <ThoughtList />
      </Container>
    );
  }
}
