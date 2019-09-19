import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadCart, removeProductFromCart, increaseCartItem, decreaseCartItem } from '../actions/cartActions';
import ContentLoader from 'react-content-loader'
import PropTypes from 'prop-types';
import Input from '../../common/components/input/Input'
import Button from '../../common/components/button/Button';

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

				<article className="order">

					<div className="order__container">
						<form action="" novalidate="novalidate">
							<div className="order__container__form">

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

								<div className="delivery__data">
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
										<h3>В данный момент доставка осуществляется только в пределах Москвы</h3>
								</div>

								<div className="order__bill">
									<h3>Ваш чек</h3>
									<div className="order__cost">
										<div className="title">
											Товары:
										</div>
										<div className="value">
											2 990
										</div>
									</div>

									<div className="order__cost">
										<div className="title">
											Доставка:
										</div>
										<div className="value">
											Заполните адрес
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
													2 990
											</div>
									</div>

									
								</div>

							</div>

						</form>

						<Button
              title="Оформить заказ"
              type="primary" />

						<div className="cart-section-note footer">
							<div className="cart-section-note-text">
									Поможем оформить заказ, если что-то пошло не так. Звоните
									<a href="tel:89101200135">+7 (910) 120-01-35</a>
							</div>
						</div>
					</div>
				</article>
			</div>
			
		</div>
    )
  }
}

export default Checkout