import React from 'react';

const Footer = () => {
	return <footer className='footer'>

	<div className="container">
		<div className="row">

			<div className="col-4 footer__column">
				<h5>LAPKIN HOME</h5>
				<ul>
					<li><a href="">Shop All Products</a></li>
					<li><a href="">Ethics & Sustainability</a></li>
					<li><a href="">Materials</a></li>
				</ul>
			</div>

			<div className="col-4 footer__column">
				<h5>CUSTOMER</h5>
				<ul>
					<li><a href="">Care & Cleaning</a></li>
					<li><a href="">FAQ</a></li>
					<li><a href="">Shipping and Delivery</a></li>
				</ul>
			</div>

			<div className="col-4 footer__column">
				<h5>CONTACT US</h5>
				<ul>
					<li><a href="">Tel: 61 2 9938 3874</a></li>
					<li><a href="">Email: customerservice@uo.com.au</a></li>
				</ul>
			</div>

		</div>
	</div>
	</footer>
}

export default Footer