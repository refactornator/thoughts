import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

global.Thoughts = {
	start: (thoughts) => {
		ReactDOM.render(<App thoughts={thoughts} />, document.getElementById('app'));
	}
}