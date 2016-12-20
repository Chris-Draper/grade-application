import React from 'react';
import ReactDOM from 'react-dom';

class GradeDisplay extends React.Component {
	render() {
		return (
			<h1>This rendered</h1>
		);
	}
}

ReactDOM.render(
	<GradeDisplay />, 
	document.getElementById('content')
);