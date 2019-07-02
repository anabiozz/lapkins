import React from 'react';

const Footer = () => {
	return <footer className='footer'>

	<div className="container">
		<div className="row">

			<div className="col-4 footer__column">
				<h5>LAPKIN HOME</h5>
				<ul>
					<li><a href="">Все продукты</a></li>
					<li><a href="">Этика и Устойчивость</a></li>
					<li><a href="">Материалы</a></li>
				</ul>
			</div>

			<div className="col-4 footer__column">
				<h5>Покупателям</h5>
				<ul>
					<li><a href="">FAQ</a></li>
					<li><a href="">Покупки и доставка</a></li>
				</ul>
			</div>

			<div className="col-4 footer__column">
				<h5>Контакты</h5>
				<ul>
					<li><a href="">Тел: 89001234567</a></li>
					<li><a href="">Email: customerservice@ru</a></li>
				</ul>
			</div>

		</div>
	</div>
	</footer>
}

export default Footer