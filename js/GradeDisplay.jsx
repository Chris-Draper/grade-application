import React from 'react';
import ReactDOM from 'react-dom';

class GradesDisplay extends React.Component {
	render() {
		return (
			<h1>This rendered</h1>
		);
	}
}

ReactDOM.render(
	<GradesDisplay />,
	document.getElementById('content')
);