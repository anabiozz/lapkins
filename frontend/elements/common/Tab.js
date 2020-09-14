import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Tab extends Component{

	onClick = () => {
		const { label, onClick } = this.props;
		onClick(label);
	};

	render() {
		const { onClick, props: { activeTab, label } } = this;

		let className = 'tab';

		if (activeTab === label) {
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
	onClick: PropTypes.func.isRequired,
};

export default Tab;