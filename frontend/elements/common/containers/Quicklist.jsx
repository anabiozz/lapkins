import React, {Component} from 'react';
import {
	NavLink
} from "react-router-dom";
import {connect} from "react-redux";
import * as actions from '../../products/actions';
import PropTypes from 'prop-types';


class Quicklist extends Component {
	constructor(props) {
		super(props);
	}

	// click(e) {
	// 	const { getProducts, match, reset } = this.props;
	// 	reset();
	// 	getProducts(config.productTypes[match.params.categoryType]);
	// }

	render() {
		return (
			<nav>
				<ul className="nav">
					<li>
						<NavLink className="quicklist_main_link" to="/catalog/wallart/posters-without-frame">Декор</NavLink>
						<ul>
							<li>
								<NavLink
									to="/catalog/wallart/posters-without-frame"
									className="quicklist__link">
									Постеры без рамки
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalog/wallart/framed-posters-plastic"
									className="quicklist__link">
									Постеры с пластиковой рамкой
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalog/wallart/framed-posters-wood"
									className="quicklist__link">
									Постеры с деревянной рамкой
								</NavLink>
							</li>
						</ul>
					</li>
					<li>
						<NavLink className="quicklist_main_link"  to="/catalog/stationery">Канцелярия</NavLink>
						<ul>
							<li>
								<NavLink
									to="/catalog/stationery/postcards"
									className="quicklist__link">
									Открытки
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalog/stationery/notebooks"
									className="quicklist__link">
									Тетради
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalog/stationery/diaries"
									className="quicklist__link">
									Ежедневники
								</NavLink>
							</li>
							<li>
								<NavLink
									to="/catalog/stationery/calendars"
									className="quicklist__link">
									Календари
								</NavLink>
							</li>
						</ul>
					</li>
					<li><NavLink className="quicklist_main_link" to="/wallart">Link 1</NavLink></li>
					<li><NavLink className="quicklist_main_link" to="/wallart">Link 2</NavLink></li>
				</ul>
			</nav>
		)
	}
}

Quicklist.propTypes = {
	errors: PropTypes.string.isRequired,
	fetching: PropTypes.bool.isRequired,
	getProducts: PropTypes.func.isRequired,
	reset: PropTypes.func.isRequired,
};


const mapStateToProps = state => ({
	errors: state.products.errors,
	fetching: state.products.fetching,
});

export default connect(mapStateToProps, { ...actions })(Quicklist)