import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import config from '../../config'

export default class Header extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      visible: true,
      open: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    if (currentScrollPos > 50) {
      this.setState({
        visible: false,
      });
    } else {
      this.setState({
        visible: true
      });
    }
  };

  render() {

    return(
      <Fragment>
        <header >

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

                <nav className="quicklist">
                  <ul>
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/wallart/posters">Постеры</NavLink>

                      <div className="quicklist__dropdown quicklist__dropdown__centered">
          
                        <div className="quicklist__childlist">

                          <ul className="quicklist__childlist__grid">

                            <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Продукты
                              </div>
                              <ul>
                                <li>
                                  <NavLink to="/wallart/posters" className="quicklist__link" aria-current="page">
                                    Постеры без рамки
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink to="/wallart/framed-posters-plastic" className="quicklist__link">
                                    Постеры с пластиковой рамкой
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/wallart/framed-posters-wood" className="quicklist__link">
                                    Постеры с деревянной рамкой
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li>
                          
                            <li className="quicklist__childlist__item">
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
                            </li>
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
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/stationary">Канцелярия</NavLink>

                      <div className="quicklist__dropdown quicklist__dropdown__centered">
          
                        <div className="quicklist__childlist">

                          <ul className="quicklist__childlist__grid">

                            <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Продукты
                              </div>
                              <ul>
                                <li>
                                  <NavLink to="/collections/abstract-wall-art" className="quicklist__link" aria-current="page">
                                    Открытки
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/animal-wall-art" className="quicklist__link">
                                    Тетради
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/black-and-white-wall-art" className="quicklist__link">
                                    Ежедневники
                                  </NavLink>
                                </li>

                                <li>
                                  <NavLink to="/collections/black-and-white-wall-art" className="quicklist__link">
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
                  <NavLink to="/">
                    <span className="icon-user">
                      <img src={`data:image/svg+xml;base64,${config.user}`} />
                    </span>
                  </NavLink>
                </li>

                <li className="icon">
                  <NavLink to="/">
                    <span className="icon-heart">
                      <img src={`data:image/svg+xml;base64,${config.search}`} />
                    </span>
                  </NavLink>
                </li>

                <li className="icon">
                  <NavLink to="/cart">
                    <span className="icon-cart">
                      <img src={`data:image/svg+xml;base64,${config.cart}`} />
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