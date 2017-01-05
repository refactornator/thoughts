'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import client from './client';

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {thoughts: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/thoughts'}).done(response => {
			this.setState({thoughts: response.entity._embedded.thoughts});
		});
	}

	render() {
		return (
			<ThoughtList thoughts={this.state.thoughts}/>
		)
	}
}

class ThoughtList extends React.Component{
	render() {
		var thoughts = this.props.thoughts.map(thought =>
			<Thought key={thought._links.self.href} thought={thought}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>Text</th>
						<th>Timestamp</th>
					</tr>
					{thoughts}
				</tbody>
			</table>
		)
	}
}

class Thought extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.thought.text}</td>
				<td>{this.props.thought.creationTime}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
);
