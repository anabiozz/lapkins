import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import config from '../../../config';
import Loader from '../components/Loader';

const Quicklist = () => {

	const [isShow, setIsShow] = useState(false);
	const [categories, setCategories] = useState([]);
	const [loading, setLoading] = useState(false);

	const handleChange = () => {
		setIsShow(false);
		setTimeout(
			function() {
				setIsShow(true);
			}.bind(this),
			100
		);
	};

	useEffect(() => {
		setLoading(true);
		fetch(`${config.apiDomain}/api/v1/products/categories`)
			.then((response) => {
				if (!response.ok) {
					throw new Error('Could not fetch categories');
				}
				return response.json();
			})
			.then(categories => {
				console.log(categories);
				setCategories(categories);
			})
			.catch(error => {
				console.error(error);
			});
		setLoading(false);
	}, []);

	return (
		<nav>
			<ul>
				{
					loading && <Loader />
				}
				{
					!loading && (!categories || categories.length === 0) && (
						<span>Категории отсутствуют</span>
					)
				}
				{
					!loading && categories && categories.map((category, i) => (
						<li key={i}>
							<Link onClick={handleChange} className="quicklist-main-link" to={'/' + category.id}>{category.name.filter(obj => {return obj.lang === 'ru';})[0].value}</Link>
							<ul>
								{
									category.ancestors.map((ancestor, i) => (
										<li key={i}>
											<Link onClick={handleChange} to={'/' + category.id + '/' + ancestor.id}>{ancestor.name.filter(obj => {return obj.lang === 'ru';})[0].value}</Link>
										</li>
									))
								}
							</ul>
						</li>
					))
				}
				{/*<li><Link className="quicklist-main-link" to="/wallart">Link 1</Link></li>*/}
				{/*<li><Link className="quicklist-main-link" to="/wallart">Link 2</Link></li>*/}
			</ul>
		</nav>
	);
};

export default Quicklist;