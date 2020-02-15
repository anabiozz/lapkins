import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import { connect } from 'react-redux';
import { cartReset } from '../../cart/actions';
import Icons from "../components/Icons";
import Search from "../components/Search";

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isProductAdded: false,
    };
  }

  render() {

    const { isProductAdded } = this.props;

    if (isProductAdded) {
     
      this.setState({
				isProductAdded: true,
			});

      setTimeout(() => {
        this.setState({
          isProductAdded: false,
        });
      }, 1000);
     
      this.props.cartReset();
    }

    return(
      <Fragment>
        <header>

          <div className="header__mobile">
            <Menu right width={ '50%' }>
              <NavLink id="home" className="menu-item" to="/">Home</NavLink>
              <NavLink id="about" className="menu-item" to="/about">About</NavLink>
              <NavLink id="contact" className="menu-item" to="/contact">Contact</NavLink>
            </Menu>
          </div>

          <div className="header__desktop">
            <div className="header__desktop__content">

              <div className="logo">
                <NavLink to="/">Lapkin's Home</NavLink>
              </div>

              <div className="right_header_wrapper">
                <Search/>
                <Icons/>
              </div>

            </div>
          </div>

        </header>
      </Fragment>
      
    )
  }
}

const mapStateToProps = state => ({
  isProductAdded: state.cart.isProductAdded,
});

export default connect(mapStateToProps, { cartReset })(Header)