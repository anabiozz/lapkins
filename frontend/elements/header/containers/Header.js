import React, { Fragment, useState, useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import CartInfo from '../components/CartInfo';
import AuthNav from '../components/AuthNav';
import * as fetch from '../fetch';
import { useCookies } from 'react-cookie';
import config from '../../../config';
import Loader from '../../common/components/Loader';
import { Context } from '../../../_helpers/login';

const Header = () => {

  const [cartInfo, setCartInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cookie, setCookie, removeCookie] = useCookies([config.cookies.token, config.cookies.tmpUserID]);
  const usersContext = useContext(Context);
  const { login, setLogin } = usersContext;

  useEffect(() => {
    if (cookie[config.cookies.token]) {
      console.log('cookie[config.cookies.token]');
      setLoading(true);
      fetch.loadCartInfo()
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not fetch cart info!');
          }
          return response.json();
        })
        .then(data => {
          setCartInfo(data);
          setLogin(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLogin(false);
          setLoading(false);
        });
    }
  }, [cookie[config.cookies.token]]);

  useEffect(() => {
    if (login && !cookie[config.cookies.token]) {
      console.log('login');
      setLoading(true);
      fetch.loadCartInfo()
        .then((response) => {
          if (!response.ok) {
            throw new Error('Could not fetch cart info!');
          }
          return response.json();
        })
        .then(data => {
          setCartInfo(data);
          setLogin(true);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLogin(false);
          setLoading(false);
        });
    }
  }, [login]);

  function handleLogout(e) {
    e.preventDefault();
    setCartInfo({});
    removeCookie(config.cookies.token);
    setLogin(false);
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
          !loading && error && (
          <div className="header-desktop">
            <div className="content">
              <strong>ERROR:</strong>{error.message}
            </div>
          </div>
          )
        }
        {
          !loading && !error && (
            <Fragment>
              <div className="header__mobile">
                <Menu right width={ '50%' }>
                  <NavLink id="home" className="menu-item" to="/">Home</NavLink>
                  <NavLink id="about" className="menu-item" to="/about">About</NavLink>
                  <NavLink id="contact" className="menu-item" to="/contact">Contact</NavLink>
                </Menu>
              </div>

              <div className="header-desktop">
                <div className="content">

                  <div className="logo">
                    <NavLink to="/">Lapkin`s Home</NavLink>
                  </div>

                  <div className="right-wrapper">
                    {/*<Search/>*/}
                    <AuthNav handleLogout={handleLogout} isLogin={login} />
                    <CartInfo info={cartInfo}  />
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