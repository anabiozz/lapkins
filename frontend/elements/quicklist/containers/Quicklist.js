import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Loader from '../../common/Loader';
import {getCategories} from '../../../api';
import PropTypes from 'prop-types';
import { fetchCategories } from '../../../actions';

class Quicklist extends Component{
	constructor(props) {
		super(props);
		this.state = {
			hidden: false,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		this.props.fetchCategories();
	}

	handleChange (){
		this.setState({
			hidden: true,
		});
		setTimeout(function() {this.setState({hidden: false});}.bind(this), 100);
	}

	render() {

		const { categories } = this.props;

		return (
			<nav>
				<ul>
					{
						categories.fetching && <Loader />
					}
					{
						!categories.fetching && (!categories.data || categories.data.length === 0) && (
							<span>Категории отсутствуют</span>
						)
					}
					{
						!categories.fetching && categories.data && categories.data.map((category, i) => (
							<li className='main-li' key={i}>
								<Link onClick={this.handleChange} className="quicklist-main-link" to={'/catalog/' + category.url} >
									{category.display}
								</Link>
								<ul className={this.state.hidden ? 'hidden' : ''}>
									<li className='wrapper'>
										<ul className='inner_ul'>
											{
												category.ancestors.map((ancestor, i) => (
													<li key={i} className='inner_li'>
														{ancestor.name}
														{
															ancestor.items.map((item, j) => (
																<Link key={j} onClick={this.handleChange} to={'/catalog/' + category.url + '?q=' + item.name} >
																	{item.name}
																</Link>
															))
														}
													</li>
												))
											}
										</ul>
									</li>
								</ul>
							</li>
						))
					}
				</ul>
			</nav>
		);
	}
}

Quicklist.propTypes = {
	categories: PropTypes.object.isRequired,
	fetchCategories: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
	fetchCategories,
};

const mapStateToProps = (state, ownProps) => ({
	categories: state.categories,
});

export default connect(mapStateToProps, mapDispatchToProps)(Quicklist);