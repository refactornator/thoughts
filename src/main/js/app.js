import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import client from './client';

import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

const muiTheme = getMuiTheme({
  palette: {
    accent1Color: deepOrange500,
  },
});

export default class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            category: localStorage.getItem('category') || 'work',
            thoughts: props.thoughts || []
        };
    }

    componentDidMount() {
        client.getResource('thoughts').then(thoughts => {
            this.setState({thoughts});
        });
    }

    rememberThought(text, toggled) {
        const category = toggled === false ? 'work' : 'life';
        client.newResource('thoughts', {
            body: JSON.stringify({
                text,
                category
            })
        }).then(newThought => {
            this.setState({
                thoughts: [newThought].concat(this.state.thoughts)
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

    toggleCategory(toggled) {
        const category = toggled === false ? 'work' : 'life';
        this.setState({category});
        localStorage.setItem('category', category);
    }

    render() {
        const {category} = this.state;
        const toggled = category === 'life' ? true : false;
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div className="container">
                    <ThoughtInput toggled={toggled} categoryToggleHandler={this.toggleCategory.bind(this)} newThoughtHandler={this.rememberThought.bind(this)}/>
                    <ThoughtList category={category} thoughts={this.state.thoughts} deleteThoughtHandler={this.forgetThought.bind(this)}/>
                </div>
            </MuiThemeProvider>
        )
    }
}
