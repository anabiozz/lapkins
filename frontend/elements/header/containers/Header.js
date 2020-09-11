import React, { Fragment, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

import CartInfo from '../components/CartInfo';
import AuthNav from '../components/AuthNav';
import {getSummary} from '../../cart/fetch';
// import { useCookies } from 'react-cookie';
import config from '../../../config';
import Loader from '../../common/components/Loader';

const Header = () => {

  const [loading, setLoading] = useState(false);
  // const [cookie, setCookie, removeCookie] = useCookies([config.cookies.token, config.cookies.tmpUserID]);
  // const globalState = useContext(store);
  // const { state, dispatch } = globalState;

  // useEffect(() => {
  //   if (cookie[config.cookies.token]) {
  //     setLoading(true);
  //     getSummary()
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Could not fetch cart info!');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         // dispatch({type: 'SET_CART_INFO', value: data});
  //         // dispatch({type: 'SET_USER', value: true});
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //
  //     setLoading(false);
  //   }
  // }, [cookie[config.cookies.token]]);

  // useEffect(() => {
  //   if (state.user.isLoggedIn && !cookie[config.cookies.token]) {
  //     setLoading(true);
  //     getSummary()
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error('Could not fetch cart info!');
  //         }
  //         return response.json();
  //       })
  //       .then(data => {
  //         dispatch({type: 'SET_CART_INFO', value: data});
  //         dispatch({type: 'SET_USER', value: true});
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //
  //     setLoading(false);
  //   }
  // }, [state.user.isLoggedIn && !cookie[config.cookies.token]]);

  function handleLogout(e) {
    e.preventDefault();
    // dispatch({type: 'RESET_CART_INFO'});
    // dispatch({type: 'RESET_USER'});
    // removeCookie(config.cookies.token);
    // history.replace('/', state);
  }

  console.log('RENDER <Header>');

  return(
      <header>
        {
          loading && (
            <div className="header-desktop">
              <div className="content">
                <Loader />
              </div>
            </div>
          )
        }
        {
          !loading && (
            <Fragment>
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
                    {/*<Search/>*/}
                    {/*<AuthNav handleLogout={handleLogout} isLoggedIn={state.user.isLoggedIn} />*/}
                    {/*<CartInfo info={state.headerCartInfo}  />*/}
                  </div>

                </div>
              </div>
            </Fragment>
          )
        }
        </header>
    );
};

export default Header;