import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Breadcrumbs from '../../common/components/breadcrumbs';
import Loader from '../../common/components/Loader';
import config from '../../../config';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

class Categories extends Component {

	componentWillReceiveProps(nextProps) {
    const { getCategories, match } = nextProps;
    if (match.url !== this.props.match.url) {
      getCategories(config.productTypes[match.params.category])
    }
  }

	componentDidMount() {
    this.props.getCategories(config.productTypes[this.props.match.params.category])
	}

	render() {

		const { categories, fetching, errors } = this.props;

		console.log(categories);

		console.log('RENDER <Categories>')

		return (
			<div className="product__categories">
				<section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs />
          </div>
        </section>
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
						categories.categories && categories.categories.map(category => (
							<div className="category">
								<h2 className="category__title">{category.category_name}</h2>
								{
								<div className="subcotegory__content">
									{
										category.sub_categories.map(sub_category => (
												<NavLink className="subcotegory__item" to={ `${this.props.match.params.category}/${sub_category.url}` }>
													<img 
														src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />
													<div className="subcotegory__name">
														<h3>{sub_category.display}</h3>
													</div>
												</NavLink>
										))
									}
								</div>
								}
							</div>
						))
					}
				</div>
      </div>
		)
	}
}

Categories.propTypes = {
  categories: PropTypes.object.isRequired,
  errors: PropTypes.string.isRequired,
  fetching: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  categories: state.categories.categories,
  errors: state.categories.errors,
  fetching: state.categories.fetching,
})

export default connect(mapStateToProps, { ...actions })(Categories);