import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import client from './client';

import ThoughtInput from './components/thought_input';
import ThoughtList from './components/thought_list';

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
        const filteredThoughts = this.state.thoughts.filter(thought => {
            return thought.category === category;
        });

        return (
            <MuiThemeProvider>
                <div className="container">
                    <ThoughtInput toggled={toggled} categoryToggleHandler={this.toggleCategory.bind(this)} newThoughtHandler={this.rememberThought.bind(this)} />
                    <ThoughtList thoughts={filteredThoughts} deleteThoughtHandler={this.forgetThought.bind(this)} />
                </div>
            </MuiThemeProvider>
        )
    }
}
