import React, { Component, Fragment } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';
import Breadcrumbs from '../../common/components/breadcrumbs';
import Loader from '../../common/components/Loader';
import config from '../../../config';

class Categories extends Component {

	componentDidMount() {
		console.log("SadwdWA");
		
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
						categories.name && categories.name
					}
					{
						categories.categories && categories.categories.map(category => {
							{/* console.log(category) */}
						})
					}
				</div>
      </div>
		)
	}
}

// Products.propTypes = {
//   categories: PropTypes.arrayOf(PropTypes.shape(productProp).isRequired).isRequired,
//   errors: PropTypes.string.isRequired,
//   fetching: PropTypes.bool.isRequired,
//   getProducts: PropTypes.func.isRequired,
// }

const mapStateToProps = state => ({
  categories: state.categories.categories,
  errors: state.categories.errors,
  fetching: state.categories.fetching,
})

export default connect(mapStateToProps, { ...actions })(Categories);