import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Tab from './Tab';

class Tabs extends Component {

	render() {

		const { children, onClick, activeTab } = this.props;

		return (
			<div className="tabs-wrapper">
				<div className="tabs">
					{
						children.map((child) => {
							const { label, id } = child.props;
							return (
								<Tab id={id} activeTab={activeTab} key={id} label={label} onClick={onClick} />
							);
						})}
				</div>

				<div className="tab-content">
					{
						children.map((child) => {
							if (child.props.id !== activeTab) return undefined;
							return child.props.children;
						})
					}
				</div>

			</div>
		);
	}
}

Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
	onClick: PropTypes.func.isRequired,
	activeTab: PropTypes.string.isRequired,
};

export default Tabs;