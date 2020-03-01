import React, { Component } from 'react';
import { connect } from 'react-redux';
import Input from '../../common/components/Input'
import Button from '../../common/components/Button';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Tabs from "../components/Tabs";
import PersonalData from "../components/PersonalData";
import DeliveryData from "../components/DeliveryData";
import CartDetailed from "../components/CartDetailed";
import CheckoutDetailed from "../components/CheckoutDetailed";

class Checkout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isDelivery: false,
			inputs: {
				phone: "",
				name: "",
				surname: "",
				email: "",
				street: "",
				apartment: "",
				house: "",
				promocode: "",
			}
		};

		this.tabOnClick = this.tabOnClick.bind((this));
		this.handleInputs = this.handleInputs.bind((this));
	}

	static fetching ({ dispatch }) {
    // return [dispatch(loadCart())];
  }

	tabOnClick(e) {
		if (!e.target.classList.contains('tabs__tab__active') && !this.state.isDelivery) {
			this.setState({
				isDelivery: true,
			});
		} else {
			this.setState({
				isDelivery: false,
			});
		}
	};

	handleInputs(e) {
    const value = e.currentTarget.value;
		const name = e.currentTarget.name;
    
		this.setState(prevState => ({
			inputs: {
				...prevState.inputs,
				[name]: value,
			}
    }));
  };

  render() {

		console.log('RENDER <Checkout>');

		const { total } = this.props;

    return (
		<div className="checkout">

			<section className="breadcrumbs_wrapper">
				<Breadcrumbs />
			</section>

			<div className="checkout-main">
				<h3 className="checkout-title">ОФОРМЛЕНИЕ ЗАКАЗА</h3>

				<article className="order">
					<div className="order-container">

						<div className="order-container-left">
							<div className="order-type">
								<div className="order-type-title">Выберите, как хотите получить заказ</div>
								<Tabs state={this.state} onClick={this.tabOnClick}/>
							</div>

							<div className="data-inputs">
								<PersonalData state={this.state} onChange={this.handleInputs}/>
								<DeliveryData state={this.state} onChange={this.handleInputs}/>
							</div>
						</div>

						<div className="order-container-right">
							<CheckoutDetailed
								state={this.state}
								onChange={this.handleInputs}
								orderPrice={0}
								numberOfItems={0}
							/>
						</div>
					</div>

					<Link to='/done'>
						<Button
							title="Оформить заказ"
							type="primary"
							action={this.checkout} />
					</Link>

					<div className="cart-section-note">
						Поможем оформить заказ, если что-то пошло не так. Звоните
						<a href="tel:89202937264">+7 (920) 293-72-64</a>
					</div>
				</article>

			</div>
		</div>
    )
  }
}

const mapStateToProps = state => ({
  total: state.cart.total,
});

export default connect(mapStateToProps, null )(Checkout)