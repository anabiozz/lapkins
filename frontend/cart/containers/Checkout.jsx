import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import Input from '../../common/components/input/Input.jsx'
import Button from '../../common/components/button';

const MyLoader = props => (
  <ContentLoader
    height={160}
    width={400}
    speed={2}
    primaryColor="#f3f3f3"
    secondaryColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="5" ry="5" width="70" height="70" />
    <rect x="80" y="17" rx="4" ry="4" width="300" height="13" />
    <rect x="80" y="40" rx="3" ry="3" width="250" height="10" />
  </ContentLoader>
)


class Checkout extends Component {

	constructor() {
		super();
		this.state = {
			isDelivery: false,
		};
	}

	tabOnClick = (e) => {
		if (!e.target.classList.contains('tabs__tab__active') && !this.state.isDelivery) {
			this.setState(({
				isDelivery: true,
			}));
		} else {
			this.setState(({
				isDelivery: false,
			}));
		}
	}

  render() {

		console.log('RENDER <Checkout>');

		const state = this.props.location.state;

		console.log(state);

		const price = state.cartItems.map((item) => {
			 return item.product.price_override * item.count
		})

		const totalProductPrice = state.cartItems.map((item) => {
			return item.product.price_override * item.count
	 }).reduce((a, b) => a+b)

    return (
		<div className="chackout">
			<h2 className="chackout__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>

			<div className="articles">

				<article className="order">

					<div className="order__container">
						{/* <form action="" novalidate="novalidate"> */}

							<div className="order__container__left">


								<div className="order__type">
									<h3>Выберите, как хотите получить заказ</h3>
									<div className="order__type__tabs">
										<div className={this.state.isDelivery ? 'tabs__tab tabs__tab__active': 'tabs__tab'} onClick={this.tabOnClick}>
											<div className="tabs__tab__icon">
												<svg width="44" height="30" viewBox="0 0 44 30" xmlns="http://www.w3.org/2000/svg">
													<path 
														d="M39.9 26a5.002 5.002 0 0 1-9.8 0H15.9a5.002 5.002 0 0 1-9.8 0H2.014A2.006 2.006 0 0 1 0 24.003V1.997C0 .894.9 0 2.014 0h23.972C27.098 0 28 .895 28 1.997V4h8l8 10.107V26h-4.1zM42 16H28v8h2.1a5.002 5.002 0 0 1 9.8 0H42v-8zm-.635-2l-6.333-8H28v8h13.365zM15.9 24h10.086C25.998 24 26 1.997 26 1.997 26 2.003 2.014 2 2.014 2 2.002 2 2 24.003 2 24.003c0-.002 1.657-.002 4.1-.003a5.002 5.002 0 0 1 9.8 0zM11 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm24 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" 
														fill="currentColor" 
														fill-rule="evenodd" />
												</svg>
											</div>
											<div className="tabs__tab__text">
												Доставка по адресу
											</div>
										</div>
										<div className={!this.state.isDelivery ? 'tabs__tab tabs__tab__active': 'tabs__tab'} onClick={this.tabOnClick}>
											<div className="tabs__tab__icon">
												<svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
													<g fill="currentColor" fill-rule="nonzero">
														<path 
															d="M38 8v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h38a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1zm-2 0H4v20h32V8zM2 2v4h36V2H2z" />
														<path 
															d="M15 12a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H15zm0-1h10a2 2 0 1 1 0 4H15a2 2 0 1 1 0-4z" />
													</g>
												</svg>
											</div>
											<div className="tabs__tab__text">
												Самовывоз
											</div>
										</div>
									</div>
								</div>


								<div className="data__inputs">
									<div className="personal__data">
											<h3>Введите данные покупателя</h3>
											<div className="fields__line">
												<div className="field__group">
													<Input
														title="Телефон"
														type="tel" 
														name="Телефон" 
														required="" 
														value="" 
														aria-required="true" />
												</div>
											</div>
											<div className="fields__line">
												<div className="field__group">
													<Input
														title="Имя"
														type="text" 
														name="Имя" 
														required="" 
														value="" 
														aria-required="true" />
												</div>
											</div>
											<div className="fields__line">
												<div className="field__group">
													<Input
														title="Фамилия"
														type="text" 
														name="Фамилия" 
														required="" 
														value="" 
														aria-required="true" />
												</div>
											</div>
											<div className="fields__line">
													<div className="field__group">
														<Input
															title="Email"
															type="text" 
															name="Email" 
															required="" 
															value="" 
															aria-required="true" />
													</div>
											</div>
									</div>

									<div className={this.state.isDelivery ? 'delivery__data' : 'delivery__data hide'}>
										<h3>Заполните адрес доставки</h3>

										{/* <div className="fields__line">
											<div className="field__group">
												<Input
													title="Город"
													type="text" 
													name="Город" 
													required="" 
													value="" 
													aria-required="true"/>
											</div>
										</div> */}

										{/* <div className="fields__line">
											<div className="field__group">
												<Input
													title="Индекс"
													type="number" 
													name="Индекс" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div> */}

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Улица"
													type="text" 
													name="Улица" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Кв."
													type="text" 
													name="Кв." 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Дом"
													type="text" 
													name="Дом" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>

										{/* <div className="order-delivery">
												<h3>Выберите способ доставки</h3>
												<p>При заказе от 4000 руб. доставка по всей России бесплатная.</p>
												<input type="hidden" name="deliverySum" id="deliverySum" value="" />

												<ul className="delivery-options">
														<li>Заполните все поля выше</li>
												</ul>
										</div> */}
										{/* <h3>В данный момент доставка осуществляется только в пределах Москвы</h3> */}
									</div>
								</div>

							</div>

							<div className="order__container__right">
								<div className="order__bill">
									<h3>Ваш чек</h3>
									<div className="order__cost">
										<div className="title">
											Товары:
										</div>
										<div className="value">
											{totalProductPrice}
										</div>
									</div>

									<div className="order__cost">
										<div className="title">
											Доставка:
										</div>
										<div className="value">
											{!this.state.isDelivery ? "Бесплатно" : "Заполните адрес"}
										</div>
									</div>

									<div className="order__cost">
										<Input
											type="text" 
											name="promocode"
											required="" 
											value="" 
											aria-required="true"
											placeholder="Промокод" />
									</div>

									<div className="order__cost">
											<div className="title">
												Итого:
											</div>
											<div className="value">
												{totalProductPrice}
											</div>
									</div>
								</div>
							</div>
						{/* </form> */}
					</div>

					<Button
              title="Оформить заказ"
              type="primary" />

						<div className="cart-section-note footer">
							<div className="cart-section-note-text">
									Поможем оформить заказ, если что-то пошло не так. Звоните
									<a href="tel:89101200135">+7 (910) 120-01-35</a>
							</div>
						</div>
				</article>
			</div>
			
		</div>
    )
  }
}

export default Checkout