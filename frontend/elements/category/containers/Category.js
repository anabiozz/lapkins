import React, { Fragment, useEffect, useState } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs';
import Loader from '../../common/Loader';
import * as fetch from '../fetch';
import { Link, useParams } from 'react-router-dom';

const Category = () => {

	const [subcategories, setSubcategories] = useState([]);
	const [loading, setLoading] = useState(false);
	const {category} = useParams();

	useEffect(() => {
		setLoading(true);
		fetch.getCategory(category)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Could not fetch category');
				}
				return response.json();
			})
			.then(subcategories => {
				setSubcategories(subcategories);
			})
			.catch(error => {
				console.error(error);
			});
		setLoading(false);
	}, []);

	console.log('RENDER <Category>');

	return (
		<Fragment>
			<section className="breadcrumbs-wrapper">
				<Breadcrumbs />
			</section>

			<div className="category">
				<div className="category-content">
					{
						loading && <Loader />
					}
					{
						!loading && subcategories && subcategories.length === 0 && (
							<span>Данная категория товара на данный момент отсутствует</span>
						)
					}
					{
						!loading && subcategories && subcategories.map((subcategory, i) => (
							<Link key={i} className="subcategory" to={ `${category}/${subcategory.id}` }>
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
		</Fragment>
	);
};

export default Category;