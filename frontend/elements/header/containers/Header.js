import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as R from 'ramda';
// import { useCookies } from 'react-cookie';

import CartInfo from '../components/CartInfo';
import AuthNav from '../components/AuthNav';
import { fetchProducts, resetCart, logout } from '../../../actions';
import { getTotalCartProductPrice, getTotalCartProductQty } from '../../../selectors';

class Header extends Component {
  constructor(props) {
    super(props);
    this.handleLogout = this.handleLogout.bind(this);
  }

  handleLogout(e) {
    e.preventDefault();
    const { logout, resetCart } = this.props;
    logout();
    resetCart();
  }

  render() {
    console.log('RENDER <Header>');

    const { user, totalQuantity, totalPrice } = this.props;

    return(
      <header>
        <div className="header__mobile">
          <Menu right width={ '50%' }>
            <Link id="home" className="menu-item" to="/">Home</Link>
            <Link id="about" className="menu-item" to="/about">About</Link>
            <Link id="contact" className="menu-item" to="/contact">Contact</Link>
          </Menu>
        </div>

        <div className="header-desktop">
          <div className="content">

            <div className="logo">
              <Link to="/">Lapkin`s Home</Link>
            </div>

            <div className="right-wrapper">
              <AuthNav handleLogout={this.handleLogout} user={user} />
              <CartInfo totalQuantity={totalQuantity} totalPrice={totalPrice}  />
            </div>

          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  user: PropTypes.object.isRequired,
  totalPrice: PropTypes.number.isRequired,
  totalQuantity: PropTypes.number.isRequired,
  resetCart: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.object,
};

const mapDispatchToProps = {
  fetchProducts,
  logout,
  resetCart,
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data,
  totalQuantity: getTotalCartProductQty(state),
  totalPrice: getTotalCartProductPrice(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);