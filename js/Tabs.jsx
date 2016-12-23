import React from 'react';
import ReactDOM from 'react-dom';

class Tabs extends React.Component {

	//displayName: 'Tabs';

	constructor() {
		super();
		this.state = {
			selected: 0
		}
	}

	/*Do a propTypes tutorial later to understand this
	Its really useful for debugging but idk why its throwing an error
	So fuck it (for now figure it out later)
	Tabs.propTypes = {
		selected: React.PropTypes.number,
		children: React.PropTypes.oneOfType([ --> issue with this line
			React.PropTypes.array,
			React.PropTypes.element
		]).isRequired
	}*/

	handleClick(index, event) {
		event.preventDefault();
		this.setState({
			selected: index
		});
	}

	renderTitles() {
		function labels(child, index) {
			let activeClass = (this.state.selected === index ? 'active' : '');
			return (
				<li key={index}>
					<a href="#"
					className={activeClass}
					onClick={this.handleClick.bind(this, index)}>
						{child.props.label}
					</a>
				</li>
			);
		}
		return (
			<ul className="tabs_labels">
				{this.props.children.map(labels.bind(this))}
			</ul>
		);
	}

	renderContent() {
		return (
			<div className="tabs_content">
				{this.props.children[this.state.selected]}
			</div>
		);
	}

	render() {
		return(
			<div className="tabs">
				{this.renderTitles()}
				{this.renderContent()}
			</div>
		);
	}
}

export default Tabs;