import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import client from './client';

import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {thoughts: []};
    }

    componentDidMount() {
        client.getResource('thoughts').then(thoughts => {
            this.setState({thoughts});
        });
    }

    rememberThought(text) {
        client.newResource('thoughts', {
            body: JSON.stringify({
                text
            })
        }).then(newThought => {
            this.setState({
                thoughts: this.state.thoughts.concat([newThought])
            });
        });
    }

    forgetThought(path) {
        client.deleteResource(path);

        let filteredThoughts = this.state.thoughts.filter(thought => {
            return thought._links.self.href !== path;
        });

        this.setState({
            thoughts: filteredThoughts
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <ThoughtInput newThoughtHandler={this.rememberThought.bind(this)}/>
                    <ThoughtList thoughts={this.state.thoughts} deleteThoughtHandler={this.forgetThought.bind(this)}/>
                </div>
            </MuiThemeProvider>
        )
    }
}

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

ReactDOM.render(<App />, document.getElementById('app'));
