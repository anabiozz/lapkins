import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tab extends Component{

	onClick = () => {
		const { id, onClick } = this.props;
		onClick(id);
	};

	render() {
		const { onClick, props: { activeTab, label, id } } = this;
		let className = 'tab';
		if (activeTab === id) {
			className += ' tab-active';
		}
		return (
			<div className={className} onClick={onClick}>
				<div className="tab-text">{label}</div>
			</div>
		);
	}
}

Tab.propTypes = {
	activeTab: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default Tab;