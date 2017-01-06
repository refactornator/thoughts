import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';

import ThoughtList from './components/thought_list';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {thoughts: []};
	}

	componentDidMount() {
		client.fetch('thoughts').then(thoughts => {
			this.setState({thoughts});
		});
	}

	render() {
		return (
			<ThoughtList thoughts={this.state.thoughts}/>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'));
