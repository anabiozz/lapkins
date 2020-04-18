import React, {Component, Fragment} from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Categories extends Component {

	static fetching ({ dispatch }) {
    // return [dispatch(actions.getCategories(config.productTypes[path.substr(1)]))];
  }

	componentDidMount() {
		this.props.reset();
    this.props.getCategories(this.props.match.params.category);
	}

	render() {

		const { items, fetching, errors } = this.props;

		console.log(items);

		console.log('RENDER <Categories>');

		return (
			<Fragment>
				<section className="breadcrumbs-wrapper">
					<Breadcrumbs />
				</section>

				<div className="product__categories">

					<div className="product__categories__content">
						{
							fetching && <Loader />
						}
						{
							errors && (
								<div style={{ marginTop: '200px' }}>
									<strong>ERROR: </strong>
									{errors.message}
								</div>
							)
						}
						{
							items && items.map((category, i) => (
								<NavLink key={i} className="subcotegory__item" to={ `${this.props.match.params.category}/${category.url}` }>
									<img src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />
									<div className="category" key={i}>
										<h2 className="category__title">{category.name}</h2>
										<h2 className="category__description">{category.description}</h2>
									</div>
								</NavLink>

							))
						}
					</div>
				</div>
			</Fragment>
		);
	}
}

Categories.propTypes = {
	items: PropTypes.array.isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
	reset: PropTypes.func.isRequired,
	match: PropTypes.object.isRequired,
	getCategories: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
	items: state.categories.items,
  errors: state.categories.errors,
  fetching: state.categories.fetching,
});

export default connect(mapStateToProps, { ...actions })(Categories);