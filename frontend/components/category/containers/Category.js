import React, {Component} from 'react';
import Loader from '../../common/Loader';
import { Link } from 'react-router-dom';
import Layout from '../../layout/containers/Layout';
import { fetchSubCategory } from '../../../actions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Category extends Component {
	componentDidMount() {
		this.props.fetchSubCategory(this.props.match.params.category);
	}

	render() {

		console.log('RENDER <Category>');

		const { subcategories, fetching } = this.props;

		console.log(subcategories)

		return (
			<Layout>
				<div className="category">
					<div className="category-content">
						{
							fetching && <Loader />
						}
						{
							!fetching && subcategories && subcategories.length === 0 && (
								<span>Данная категория товара на данный момент отсутствует</span>
							)
						}
						{
							!fetching && subcategories && subcategories.map((subcategory, i) => (
								<Link key={i} className="subcategory" to={ `${this.props.match.params.category}/${subcategory.id}` }>
									<div className="subcategory-content" key={i}>
										<h2 className="subcategory-title">{subcategory.name}</h2>
										<h2 className="subcategory-description">{subcategory.description}</h2>
									</div>
									<img src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />
								</Link>

							))
						}
					</div>
				</div>
			</Layout>
		);
	}
}

Category.propTypes = {
	subcategories: PropTypes.array.isRequired,
	fetching: PropTypes.bool.isRequired,
	fetchSubCategory: PropTypes.func.isRequired,
	match: PropTypes.any,
};

const mapDispatchToProps = {
	fetchSubCategory,
};

const mapStateToProps = (state, ownProps) => ({
	fetching: state.subcategories.fetching,
	errors: state.subcategories.errors,
	subcategories: state.subcategories.data,
});

export default connect(mapStateToProps, mapDispatchToProps)(Category);