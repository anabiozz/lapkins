import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../layout/containers/Layout';

const Home = () => {

	console.log('RENDER <Home>');

	return (
		<Layout>
			<div className="gallery">

				<Link to="/new" className="gallery__item gallery__item__1">
					<img
						className="gallery__img"
						src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />

					<div className="content">
						<h2>Новое</h2>
					</div>
				</Link>

				<Link to="/catalog/wallart/posters" className="gallery__item gallery__item__2">
					<img
						className="gallery__img"
						src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/set_014_720x.jpg?v=1550063513" alt="Постеры" />
					<div className="content">
						<h2>Постеры</h2>
					</div>
				</Link>

				<Link to="/catalog/stationery" className="gallery__item gallery__item__3">
					<img
						className="gallery__img"
						src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Канцелярия" />
					<div className="content">
						<h2>Канцелярия</h2>
					</div>
				</Link>

				<Link to="/catalog/stationery/postcards" className="gallery__item gallery__item__4">
					<img
						className="gallery__img"
						src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Открытки" />
					<div className="content">
						<h2>Открытки</h2>
					</div>
				</Link>

			</div>
		</Layout>
	);
};


export default Home;