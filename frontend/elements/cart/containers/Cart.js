import React, { Fragment, useContext, useEffect, useState } from 'react';
import * as actions from '../fetch';
import Breadcrumbs from '../../common/components/Breadcrumbs';
import Loader from '../../common/components/Loader';
import CartProductItem from '../components/CartProductItem';
import CartDetailed from '../components/CartDetailed';
import Tabs from '../../common/components/Tabs';
import PersonalData from '../components/PersonalData';
import DeliveryData from '../components/DeliveryData';
import { store } from '../../../store';

const Cart = () =>{

  const [activeTab, setActiveTab] = useState('Самовывоз');
  const [fields, setFields] = useState({});
  const [formErrors, setFormErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [cart, setCart] = useState([]);

  // const globalState = useContext(store);
  // const { state, dispatch } = globalState;

  const emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  );

  const phoneRegex = RegExp(
    /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
  );

  const handleValidation = () => {
    let formIsValid = true;

    if(!fields['firstName']){
      formIsValid = false;
      formErrors['firstName'] = 'должно быть заполнено';
    }

    if(typeof fields['firstName'] !== 'undefined'){
      if(!fields['firstName'].match(/^[a-zA-Zа-яА-Я]+$/)){
        formIsValid = false;
        formErrors['firstName'] = 'только буквы';
      }
    }

    if(!fields['lastName']){
      formIsValid = false;
      formErrors['lastName'] = 'должно быть заполнено';
    }

    if(typeof fields['lastName'] !== 'undefined'){
      if(!fields['lastName'].match(/^[a-zA-Zа-яА-Я]+$/)){
        formIsValid = false;
        formErrors['lastName'] = 'только буквы';
      }
    }

    if(!fields['email']){
      formIsValid = false;
      formErrors['email'] = 'должно быть заполнено';
    }

    if(typeof fields['email'] !== 'undefined'){
      if(!emailRegex.test(fields.email)){
        formIsValid = false;
        formErrors['email'] = 'email не валиден';
      }
    }

    if(!fields['phone']){
      formIsValid = false;
      formErrors['phone'] = 'должно быть заполнено';
    }

    if(typeof fields['phone'] !== 'undefined'){
      formIsValid = false;
      formErrors['phone'] = phoneRegex.test(fields.phone) ? '' : 'телефон не валиден';
    }

    if (activeTab === 'Доставка по адресу') {
      if(!fields['street']){
        formIsValid = false;
        formErrors['street'] = 'должно быть заполнено';
      }

      if(!fields['apartment']){
        formIsValid = false;
        formErrors['apartment'] = 'должно быть заполнено';
      }

      if(!fields['house']){
        formIsValid = false;
        formErrors['house'] = 'должно быть заполнено';
      }
    }

    setFormErrors(formErrors);
    return formIsValid;
  };

  const submitForm = (e) => {
    e.preventDefault();
    if(handleValidation()){
      console.log(`
        --SUBMITTING--
        First Name: ${fields.firstName}
        Last Name: ${fields.lastName}
        Email: ${fields.email}
        phone: ${fields.phone}
        street: ${fields.street}
        apartment: ${fields.apartment}
        house: ${fields.house}
      `);
    }
  };

  const handleChange = (field, e) => {
    setFields({...fields, [field]: e.target.value});
  };

  const onClickTabItem = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    actions.loadCart()
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not fetch cart');
        }
        return response.json();
      })
      .then(data => {
        setCart(data);
      })
      .catch(error => {
        console.error(error);
      });

    setLoading(false);
  }, []);

  const remove = (product) => {
    setLoading(true);
    actions.removeProduct(product.sku)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not remove product from cart');
        }
        return response.json();
      })
      .then(() => {
        const newCart = cart.filter(p => {
          return p.sku !== product.sku;
        });
        setCart(newCart);
        const totalQuantity = newCart.length ? newCart.map(p => p.quantity).reduce((a, b) => a + b) : 0;
        const totalPrice = newCart.length ? newCart.map(p => p.price * p.quantity).reduce((a, b) => a + b) : 0;
        // dispatch({type: 'SET_CART_INFO', value: {price: totalPrice, quantity: totalQuantity}});

      })
      .catch(error => {
        console.error(error);
      });
    setLoading(false);
  };

  const increase = (product) => {
    actions.increaseProductQuantity(product.sku)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Could not increase product ' + product.sku);
      }
      return response.json();
    })
    .then(() => {
      const updatedCartInfo = cart.map(p =>
        p.sku === product.sku ? { ...p, quantity: product.quantity + 1 } : p
      );
      setCart(updatedCartInfo);
      const totalQuantity = updatedCartInfo.map(product => product.quantity).reduce((a, b) => a + b);
      const totalPrice = updatedCartInfo.map(product => product.price * product.quantity).reduce((a, b) => a + b);
      // dispatch({type: 'SET_CART_INFO', value: {price: totalPrice, quantity: totalQuantity}});
    })
    .catch(error => {
      console.error(error);
    });
  };

  const decrease = (product) => {
    if (product.quantity > 1) {
      actions.decreaseProductQuantity(product.sku)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Could not increase product ' + product.sku);
        }
        return response.json();
      })
      .then(() => {
        const updatedCartInfo = cart.map(p =>
          p.sku === product.sku ? { ...p, quantity: product.quantity - 1 } : p
        );
        setCart(updatedCartInfo);
        const totalQuantity = updatedCartInfo.map(product => product.quantity).reduce((a, b) => a + b);
        const totalPrice = updatedCartInfo.map(product => product.price * product.quantity).reduce((a, b) => a + b);
        // dispatch({type: 'SET_CART_INFO', value: {price: totalPrice, quantity: totalQuantity}});
      })
      .catch(error => {
        console.error(error);
      });
    }
  };

  console.log('RENDER <Cart>');

  return (
    <Fragment>

      <section className="breadcrumbs-wrapper">
        <Breadcrumbs />
      </section>

      <div className="cart">

        <div className="cart-main">
          {
            loading && <Loader />
          }
          {
            !loading && (!cart || cart.length === 0) && (
              <div className="cart-no-product">В вашей корзине пока нет товаров</div>
            )
          }
          {
            !loading && cart.length > 0 && (
              <Fragment>
                <div className="cart-content">
                  <div className="cart-content-products">
                    {
                      cart && cart.length > 0 && cart.map((product, i) => {
                        return <CartProductItem
                          key={i}
                          product={product}
                          removeProduct={remove}
                          increaseProductQuantity={increase}
                          decreaseProductQuantity={decrease} />;
                      })
                    }
                  </div>

                  <div className="cart-summary-order">
                    {/*<CartDetailed qty={state.headerCartInfo.quantity} price={state.headerCartInfo.price} checkout={submitForm}/>*/}

                    <div className="order">
                      <div className="order-container">
                        <div className="order-type">
                          <div className="order-type-title">Выберите, как хотите получить заказ</div>
                          <Tabs onClick={onClickTabItem} activeTab={activeTab} >
                            <div label="Самовывоз">
                              <PersonalData errors={formErrors} values={fields} onChange={handleChange}/>
                            </div>
                            <div label="Доставка по адресу">
                              <PersonalData errors={formErrors} values={fields} onChange={handleChange}/>
                              <DeliveryData errors={formErrors} values={fields} onChange={handleChange}/>
                            </div>
                          </Tabs>
                        </div>
                      </div>

                      <div className="cart-section-note">
                        Поможем оформить заказ, если что-то пошло не так. Звоните
                        <a href="tel:89202937264">+7 (920) 293-72-64</a>
                      </div>
                    </div>
                  </div>
                </div>
              </Fragment>
            )
          }
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;