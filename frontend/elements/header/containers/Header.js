import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import CartInfo from '../components/CartInfo';
import AuthNav from '../components/AuthNav';
// import { useCookies } from 'react-cookie';
import { fetchProducts, fetchVariations, fetchCart } from '../../../actions';
import { getTotalCartProductPrice, getTotalCartProductQty } from '../../../selectors';

class Header extends Component {
  componentDidMount() {
    this.props.fetchCart();
  }

  handleLogout(e) {
    e.preventDefault();
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
  fetchCart: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  fetchProducts,
  fetchVariations,
  fetchCart
};

const mapStateToProps = (state, ownProps) => ({
  user: state.user.data,
  totalQuantity: getTotalCartProductQty(state),
  totalPrice: getTotalCartProductPrice(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);