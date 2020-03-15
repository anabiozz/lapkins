import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import Button from '../../common/components/Button';
import Tabs from "../components/Tabs";
import PersonalData from "../components/PersonalData";
import DeliveryData from "../components/DeliveryData";
import CheckoutDetailed from "../components/CheckoutDetailed";
import PropTypes from "prop-types";
import * as actions from '../actions';
import Loader from "../../common/components/Loader";
import {withCookies} from "react-cookie";

class Checkout extends Component {

	constructor(props) {
		super(props);
		this.state = {
			activeTab: "Самовывоз",
			fields: {},
			errors: {},
		};

		this.handleInputs = this.handleInputs.bind((this));
		this.submitForm = this.submitForm.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.onClickTabItem = this.onClickTabItem.bind(this);
	}

	componentDidMount() {
		this.props.loadCartReset();
		const session = this.props.cookies.get('cartSession');
		this.props.loadCart(session);
	}


	static fetching ({ dispatch }) {
    // return [dispatch(loadCart())];
  }

	emailRegex = RegExp(
		/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	);

	phoneRegex = RegExp(
		/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
	);

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

	handleValidation(){
		let fields = this.state.fields;
		let errors = {};
		let formIsValid = true;

		if(!fields["firstName"]){
			formIsValid = false;
			errors["firstName"] = "должно быть заполнено";
		}

		if(typeof fields["firstName"] !== "undefined"){
			if(!fields["firstName"].match(/^[a-zA-Zа-яА-Я]+$/)){
				formIsValid = false;
				errors["firstName"] = "только буквы";
			}
		}

		if(!fields["lastName"]){
			formIsValid = false;
			errors["lastName"] = "должно быть заполнено";
		}

		if(typeof fields["lastName"] !== "undefined"){
			if(!fields["lastName"].match(/^[a-zA-Zа-яА-Я]+$/)){
				formIsValid = false;
				errors["lastName"] = "только буквы";
			}
		}

		if(!fields["email"]){
			formIsValid = false;
			errors["email"] = "должно быть заполнено";
		}

		if(typeof fields["email"] !== "undefined"){
			formIsValid = false;
			errors["email"] = this.emailRegex.test(fields.email) ? "" : "email не валиден";
		}

		if(!fields["phone"]){
			formIsValid = false;
			errors["phone"] = "должно быть заполнено";
		}

		if(typeof fields["phone"] !== "undefined"){
			formIsValid = false;
			errors["phone"] = this.phoneRegex.test(fields.phone) ? "" : "телефон не валиден";
		}

		if (this.state.activeTab === "Доставка по адресу") {
			if(!fields["street"]){
				formIsValid = false;
				errors["street"] = "должно быть заполнено";
			}

			if(!fields["apartment"]){
				formIsValid = false;
				errors["apartment"] = "должно быть заполнено";
			}

			if(!fields["house"]){
				formIsValid = false;
				errors["house"] = "должно быть заполнено";
			}
		}

		this.setState({errors: errors});
		return formIsValid;
	}

	submitForm(e){
		e.preventDefault();
		if(this.handleValidation()){
			console.log(`
        --SUBMITTING--
        First Name: ${this.state.fields.firstName}
        Last Name: ${this.state.fields.lastName}
        Email: ${this.state.fields.email}
        phone: ${this.state.fields.phone}
        street: ${this.state.fields.street}
        apartment: ${this.state.fields.apartment}
        house: ${this.state.fields.house}
      `);
		}else{
		}
	}

	handleChange(field, e){
		let fields = this.state.fields;
		fields[field] = e.target.value;
		this.setState({fields});
	}

	onClickTabItem(tab) {
		this.setState({ activeTab: tab })
	};

	render() {

		console.log('RENDER <Checkout>');

		const { items, errors, fetching } = this.props;

    return (
		<div className="checkout">
			<div className="checkout-main">
				{
					fetching && <Loader />
				}
				{
					errors && (
						<div style={{ marginTop: '200px' }}>
							<strong>ERROR: </strong>
							{errors.message}
						</div>
					)
				}
				{
					!errors && items && items.length === 0 && (
						<div className="cart-no-product">В вашей корзине пока нет товаров</div>
					)
				}
				{
					!errors && items && items.length > 0 && (
						<Fragment>
							<h3 className="checkout-title">ОФОРМЛЕНИЕ ЗАКАЗА</h3>

							<article className="order">
								<div className="order-container">

									<div className="order-container-left">
										<div className="order-type">
											<div className="order-type-title">Выберите, как хотите получить заказ</div>
											<Tabs onClick={this.onClickTabItem} activeTab={this.state.activeTab}>
												<div label="Самовывоз">
													<PersonalData
														errors={this.state.errors}
														values={this.state.fields}
														onChange={this.handleChange}
													/>
												</div>
												<div label="Доставка по адресу">
													<PersonalData
														errors={this.state.errors}
														values={this.state.fields}
														onChange={this.handleChange}
													/>
													<DeliveryData
														errors={this.state.errors}
														values={this.state.fields}
														onChange={this.handleChange}
													/>
												</div>
											</Tabs>
										</div>
									</div>

									<div className="order-container-right">
										<CheckoutDetailed
											state={this.state}
											numberOfItems={items.map(item => item.quantity).reduce((a, b) => a + b)}
											orderPrice={items.map(item => item.price).reduce((a, b) => a + b)}
										/>
									</div>
								</div>

								<Button title="Оформить заказ" action={this.submitForm} />

								<div className="cart-section-note">
									Поможем оформить заказ, если что-то пошло не так. Звоните
									<a href="tel:89202937264">+7 (920) 293-72-64</a>
								</div>
							</article>
						</Fragment>
					)
				}
			</div>
		</div>
    )
  }
}

Checkout.propTypes = {
	loadCart: PropTypes.func.isRequired,
	items: PropTypes.array.isRequired,
	errors: PropTypes.string.isRequired,
	fetching: PropTypes.bool.isRequired,
	loadCartReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state, ownProps) => ({
	items: state.cart.items,
	errors: state.cart.errors,
	fetching: state.cart.fetching,
	cookies: ownProps.cookies,
});

export default withCookies(connect(mapStateToProps, { ...actions })(Checkout));