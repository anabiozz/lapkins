import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import CartTable from "../components/CartTable"

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
    console.log('RENDER <Checkout>');

    return (
		<div className="cart-section center-section">
		<article className="new__order-basket">
				<h1 className="page-section-header">Оформление заказа</h1>
				<div className="order-bill only-xs">
						<h3>Ваш чек</h3>
						<div className="cart-section-summ-price fixprice only-xs">
								2 990 <span className="rub"></span> </div>
						<div className="order-cost">
								<div className="order-cost-title">Товары:</div>
								<div>
										<div className="cart-section-cost-actual" dataSum="2990">2 990 <span className="rub"></span></div>
								</div>
						</div>

						<div className="order-cost delivery-cost">
								<div className="order-cost-title">Доставка</div>
								<div className="btn-delivery-price">Заполните адрес</div>
								<div className="cart-section-delivery-price order-cost-pricer">
										0 <span className="rub"></span>
								</div>

						</div>
						<div class="promo-form">
								<input type="text" name="promocode" className="cart-section-promo js-cart-promo-input" placeholder="Промокод" />
								<button className="cart-section-add_button js-cart-promo">

								</button>
						</div>
						<div className="payment-summ">
								<div className="cart-section-summ">
										<div>Итого:</div>
										<div className="cart-section-summ-price">
												2 990 <span className="rub"></span> </div>
								</div>

								<button type="submit" className="login-popup-button delivery-section-checkout_button hidden-xs">
										<span className="button-inner">Оплатить через Сбербанк</span>
								</button>
						</div>
				</div>
				<h3>Ваша корзина</h3>
				<div className="cart-section-list">
						<div className="cart-section-item" data-id="62114" data-product="3164161">
								<div className="cart-section-remove">
										<a href="#" className="js-product-remove">
												<img src="/images/remove.svg" alt="" />
										</a>
								</div>
								<div className="cart-section-img">
										<img src="/upload/iblock/63f/63f0cf02956c2b34cf71dbc277c1f54a.jpg" alt="" />
										<div className="popular-products-quick_view popular-products-quick_view__small">
												<a className="quick-view-popup-open" data-id="3164141" data-check="1">быстрый просмотр</a>
										</div>
								</div>
								<div className="cart-section-description">
										<div className="product-description">
												<div className="product-description-code">
														<span className="product-description-code-text">Код товара: </span>
														<span className="product-description-code-value">Винтаж</span>
												</div>
												<h2 className="product-description-name">Свитшот БИЧ (S)</h2>
												<div className="product-description-price">
														<div className="product-description-discont">-0%</div>
														<div className="product-description-old_price">2 990 <span className="rub"></span></div>
														<div className="product-description-actual_price">2 990 <span className="rub"></span></div>
												</div>
										</div>
										<div className="product-options">

												<div className="product-options-count">
														<span className="product-options-text">Количество: </span>
														<div className="product-options-count-selected">
																<span className="selected_count">1</span>
																<div className="product-options-count-popup">
																		<ul>
																				<li>1</li>
																				<li>2</li>
																		</ul>
																</div>
														</div>

												</div>
												<div className="product-options-size">
														<span className="product-options-text">Размер: </span>
														<span className="product-options-value">S</span>
												</div>
										</div>
								</div>
						</div>
				</div>
				<div className="cart-section-empty">
						<div className="cart-section-empty-header">упс...</div>
						<div className="cart-section-empty-str1">ваша корзина пуста</div>
						<a href="/catalog/" className="cart-section-empty-str2">Добавьте что-нибудь из каталога</a>
				</div>
		</article>

		<article className="order-form-container">

				<div className="order-container">
						<form action="" className="validate-form validate-delivery order-form" novalidate="novalidate">
								<div className="order-left">

										<div className="order-personal-data">
												<h3>Введите данные покупателя</h3>
												<p><a className="input-popup-open" href="#login">Войдите в аккаунт</a>, чтобы заполнить поля автоматически. Или заполните поля ниже.</p>
												<div className="fields-line">
														<div className="field-group">
																<input id="ORDER_PROP_3" type="tel" name="ORDER_PROP_3" required="" value="" aria-required="true" />
																<label for="ORDER_PROP_3">Телефон</label>
														</div>
												</div>
												<div class="fields-line">
														<div class="field-group">
																<input id="ORDER_PROP_30" type="text" name="ORDER_PROP_30" required="" value="" aria-required="true" />
																<label for="ORDER_PROP_30">Имя</label>
														</div>
														<div class="field-group">
																<input type="text" id="ORDER_PROP_27" name="ORDER_PROP_27" class="delivery-form__last-name" required="" value="" aria-required="true" />
																<label for="ORDER_PROP_27">Фамилия</label>
														</div>
												</div>
												<div class="fields-line">
														<div class="field-group">
																<input type="text" id="ORDER_PROP_2" name="ORDER_PROP_2" required="" value="" aria-required="true" />
																<label for="ORDER_PROP_2">Email</label>
														</div>
												</div>

										</div>
										<div className="order-delivery-data">
												<h3>Заполните адрес доставки</h3>
												<div className="fields-line">

														<div className="city-wrap field-group">

																<div id="sls-86873" className="bx-sls ">

																		<div className="dropdown-block bx-ui-sls-input-block">

																				<span className="dropdown-icon"></span>
																				<input 
																					type="text" 
																					autocomplete="off" 
																					name="ORDER_PROP_6" 
																					value="" 
																					className="dropdown-field" 
																					placeholder="Город" 
																					required="" 
																					aria-required="true" />
																				<div className="bx-ui-sls-container">
																						<input type="text" disabled="disabled" autocomplete="off" className="bx-ui-sls-route"/>
																						<input type="text" autocomplete="off" value="" className="bx-ui-sls-fake" placeholder="Город" required="" aria-required="true" />
																				</div>

																				<div className="dropdown-fade2white"></div>
																				<div className="bx-ui-sls-loader"></div>
																				<div className="bx-ui-sls-clear" title="Отменить выбор"></div>
																				<div className="bx-ui-sls-pane">
																						<div className="bx-ui-sls-variants"></div>
																				</div>

																		</div>

																		<div className="bx-ui-sls-error-message">
																		</div>

																</div>
														</div>
														<div className="field-group index-wrap">
																<input type="number" id="ORDER_PROP_4" name="ORDER_PROP_4" />
																<label for="ORDER_PROP_4">Индекс</label>
														</div>

												</div>
												<div className="fields-line">

														<div className="field-group street-wrap">
																<input type="text" id="ORDER_PROP_50" name="ORDER_PROP_50" required="" aria-required="true" />
																<label for="ORDER_PROP_50">Улица</label>
														</div>

														<div className="field-group home-wrap">
																<input type="text" id="ORDER_PROP_51" name="ORDER_PROP_51" required="" aria-required="true" />
																<label for="ORDER_PROP_51">Дом</label>
														</div>

														<div className="apart-wrap field-group">
																<input type="text" name="ORDER_PROP_52" />
																<label for="ORDER_PROP_52">Кв.</label>
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
														2 990 <span className="rub"></span> </div>
												<div className="order-cost">
														<div className="order-cost-title">Товары:</div>
														<div>
																<div className="cart-section-cost-actual" data-sum="2990">2 990 <span className="rub"></span></div>
														</div>
												</div>

												<div className="order-cost delivery-cost">
														<div className="order-cost-title">Доставка</div>
														<div className="btn-delivery-price">Заполните адрес</div>
														<div className="cart-section-delivery-price order-cost-pricer">
																0 <span className="rub"></span>
														</div>

												</div>
												<div className="promo-form">
														<input type="text" name="promocode" className="cart-section-promo js-cart-promo-input" placeholder="Промокод" />
														<button className="cart-section-add_button js-cart-promo">

														</button>
												</div>
												<div className="payment-summ">
														<div className="cart-section-summ">
																<div>Итого:</div>
																<div className="cart-section-summ-price">
																		2 990 <span className="rub"></span> </div>
														</div>

														<button type="submit" className="login-popup-button delivery-section-checkout_button hidden-xs">
																<span className="button-inner">Оплатить через Сбербанк</span>
														</button>
												</div>
										</div>
								</div>
						</form>
				</div>
		</article>
		</div>
    )
  }
}

export default Checkout