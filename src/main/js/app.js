import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

export default class App extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <div className="container">
          <ThoughtInput store={global.thoughtRepository} />
          <ThoughtList store={global.thoughtRepository} />
        </div>
      </MuiThemeProvider>
    );
  }
}