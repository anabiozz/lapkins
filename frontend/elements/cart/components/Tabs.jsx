import React, {Component} from 'react';
import PropTypes from "prop-types";
import Tab from "./Tab";

class Tabs extends Component {

	render() {

		const {props: { children, onClick, activeTab }} = this;

		return (
			<div className="order-type-tabs">

				<div className="tabs">
					{
						children.map((child) => {
							const { label } = child.props;

							return (
								<Tab activeTab={activeTab} key={label} label={label} onClick={onClick} />
							);
						})}
				</div>

				<div className="tab-content">
					{
						children.map((child) => {
							if (child.props.label !== activeTab) return undefined;
							return child.props.children;
						})
					}
				</div>

			</div>
		)
	}
}

Tabs.propTypes = {
	children: PropTypes.instanceOf(Array).isRequired,
};

export default Tabs