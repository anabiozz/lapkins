import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import CartTable from "../components/CartTable"
import Input from '../../common/components/input/Input'

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

  render() {

		const { price } = this.props;

    console.log('RENDER <Checkout>');

    return (
		<div className="chackout">
			<h2 className="chackout__title">ОФОРМЛЕНИЕ ЗАКАЗА</h2>
			<div className="articles">

				<article className="order__form__container">

					<div className="order__container">
						<form action="" className="validate-form validate-delivery order-form" novalidate="novalidate">
							<div className="order__left">

								<div className="order__personal__data">
										<h3>Введите данные покупателя</h3>
										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Телефон"
													id="ORDER_PROP_3" 
													type="tel" 
													name="ORDER_PROP_3" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>
										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Имя"
													id="ORDER_PROP_30" 
													type="text" 
													name="ORDER_PROP_30" 
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
													name="ORDER_PROP_27" 
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
														name="ORDER_PROP_2" 
														required="" 
														value="" 
														aria-required="true" />
												</div>
										</div>
								</div>

								<div className="order__delivery__data">
										<h3>Заполните адрес доставки</h3>

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Город"
													type="text" 
													name="ORDER_PROP_2" 
													required="" 
													value="" 
													aria-required="true"/>
											</div>
										</div>

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Индекс"
													type="number" 
													name="ORDER_PROP_2" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>

										<div className="fields__line">
											<div className="field__group">
												<Input
													title="Улица"
													type="text" 
													name="ORDER_PROP_2" 
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
													name="ORDER_PROP_2" 
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
													name="ORDER_PROP_2" 
													required="" 
													value="" 
													aria-required="true" />
											</div>
										</div>

										<div className="order-delivery">
												<h3>Выберите способ доставки</h3>
												<p>При заказе от 4000 руб. доставка по всей России бесплатная.</p>
												<input type="hidden" name="deliverySum" id="deliverySum" value="" />

												<ul className="delivery-options">
														<li>Заполните все поля выше</li>
												</ul>
										</div>
								</div>
								<div className="cart-section-note return">
										<div className="cart-section-note-text">
												В течение 14 дней вы можете сделать возврат.
										</div>
								</div>
								<button type="submit" className="login-popup-button delivery-section-checkout_button only-xs">
										<span className="button-inner">Оплатить через Сбербанк</span>
								</button>
								<div className="cart-section-note footer">
										<div className="cart-section-note-text">
												Поможем оформить заказ, если что-то пошло не так. Звоните
												<a href="tel:89101200135">+7 (910) 120-01-35</a>
										</div>
								</div>

							</div>

							<div className="order-right hidden-xs">
								<div className="order-bill">
									<h3>Ваш чек</h3>
									<div className="cart-section-summ-price fixprice only-xs">
											2 990
									</div>
									<div className="order-cost">
										<div className="order-cost-title">Товары:</div>
										<div>
												<div className="cart-section-cost-actual" data-sum="2990">
													2 990
												</div>
										</div>
									</div>

									<div className="order-cost delivery-cost">
										<div className="order-cost-title">Доставка</div>
										<div className="btn-delivery-price">Заполните адрес</div>
										<div className="cart-section-delivery-price order-cost-pricer">
												0
										</div>
									</div>
									<div className="promo-form">
										<input type="text" name="promocode" className="cart-section-promo js-cart-promo-input" placeholder="Промокод" />
										<button className="cart-section-add_button js-cart-promo"></button>
									</div>
									<div className="payment-summ">
										<div className="cart-section-summ">
												<div>Итого:</div>
												<div className="cart-section-summ-price">
														2 990
												</div>
										</div>
									</div>
								</div>
							</div>

						</form>
					</div>
				</article>
			</div>
			
		</div>
    )
  }
}

export default Checkout