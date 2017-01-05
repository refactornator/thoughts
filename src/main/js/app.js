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
		client({method: 'GET', path: '/api/thoughts'}).then(response => {
			this.setState({thoughts: response.entity._embedded.thoughts});
		});
	}

	render() {
		return (
			<ThoughtList thoughts={this.state.thoughts}/>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
);
