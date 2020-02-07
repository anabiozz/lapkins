import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import config from '../../../config';
import { connect } from 'react-redux';
import { cartReset } from '../../cart/actions';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: {
        "wallart": false,
        "stationery": false,
      },
      isProductAdded: false,
    };
  }

  hover = (name, value) => {
    if (this.state.hover[name] !== value) {
      this.setState(prevState => ({
        hover: {
          ...prevState.select,
          [name]: value,
        }
      }));
    }
  };

  linkOnClick = (name) => {
    this.setState(prevState => ({
      hover: {
        ...prevState.select,
        [name]: false,
      }
    }));
  };

  mainLinkOnClick = (name) => {
    this.setState(prevState => ({
      hover: {
        ...prevState.select,
        [name]: false,
      }
    }));
  };

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
     
      this.props.cartReset()
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

              <div className="left_content">
                <div className="logo">
                  <NavLink to="/">Лапкин Дом</NavLink>
                </div>
                <nav  className="quicklist">
                  <ul>
                    <li 
                      onMouseEnter={() => this.hover("wallart", true)} 
                      onMouseLeave={() => this.hover("wallart", false)} 
                      className="quicklist__has__dropdown quicklist__has__dropdown__centered">

                      <NavLink
                        onClick={() => this.mainLinkOnClick("wallart")}
                        className="quicklist_main_link"
                        to="/wallart">Декор</NavLink>

                      <div className={this.state.hover.wallart ? "quicklist__dropdown quicklist__dropdown__centered hover" : "quicklist__dropdown quicklist__dropdown__centered"}>

                        <div className="quicklist__childlist">
                          <ul className="quicklist__childlist__grid">
                            <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Постеры
                              </div>
                              <ul>
                                <li>
                                  <NavLink onClick={() => this.linkOnClick("wallart")} to="/wallart/posters-without-frame" className="quicklist__link">
                                    Постеры без рамки
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink  onClick={() => this.linkOnClick("wallart")} to="/wallart/framed-posters-plastic" className="quicklist__link">
                                    Постеры с пластиковой рамкой
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink  onClick={() => this.linkOnClick("wallart")} to="/wallart/framed-posters-wood" className="quicklist__link">
                                    Постеры с деревянной рамкой
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li>
                          
                            {/* <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Размеры
                              </div>
                              <ul>
                              
                                <li>
                                  <NavLink to="/wallart/30x40-posters" className="quicklist__link">
                                    30x40CM
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/wallart/60x90-posters" className="quicklist__link">
                                    60x90CM
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li> */}
                          </ul>
                          
                          {/* <div className="last-news-menu">
                            <a href="/collections/new-arrivals">
                              <div className="last-news-title">  
                                New arrivals
                              </div>
                              <div className="last-news-image"> 
                                <img src="//cdn.shopify.com/s/files/1/0077/8718/4241/collections/new-arrivals_500x500.jpg?v=1550078531/" />
                              </div>
                            </a>
                          </div> */}
                        </div>
                      </div>
                    </li>
                    <li 
                      className="quicklist__has__dropdown quicklist__has__dropdown__centered"
                      onMouseEnter={() => this.hover("stationery", true)}
                      onMouseLeave={() => this.hover("stationery", false)}>

                      <NavLink
                        onClick={() => this.mainLinkOnClick("stationery")}
                        className="quicklist_main_link" 
                        to="/stationery">Канцелярия</NavLink>

                      <div className={this.state.hover.stationery ? "quicklist__dropdown quicklist__dropdown__centered hover" : "quicklist__dropdown quicklist__dropdown__centered"}>
          
                        <div className="quicklist__childlist">
                          <ul className="quicklist__childlist__grid">
                            <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Продукты
                              </div>
                              <ul>
                                <li>
                                  <NavLink onClick={() => this.linkOnClick("stationery")} to="/stationery/postcards" className="quicklist__link">
                                    Открытки
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink onClick={() => this.linkOnClick("stationery")} to="/stationery/notebooks" className="quicklist__link">
                                    Тетради
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink onClick={() => this.linkOnClick("stationery")} to="/stationery/diaries" className="quicklist__link">
                                    Ежедневники
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink onClick={() => this.linkOnClick("stationery")} to="/stationery/calendars" className="quicklist__link">
                                    Календари
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </li>

                    {/* <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/gifts">Подарки</NavLink>
                    </li>

                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/home">Для дома</NavLink>
                    </li> */}

                  </ul>
                </nav>
               
              </div>

              <ul className="icons">
                <li className="icon">
                  <NavLink to="/cart">
                    <span className="icon-cart">
                      <img
                        className={this.state.isProductAdded ? "product__added" : ""} 
                        src="/static/images/cart.png" />
                    </span>
                  </NavLink>
                </li>

              </ul>
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