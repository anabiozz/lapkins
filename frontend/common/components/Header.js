import React, { Fragment } from 'react';
import {NavLink} from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'


const cart = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE4LjEuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgMzguMTMzIDM4LjEzMyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMzguMTMzIDM4LjEzMzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzAxMDAwMjsiIGQ9Ik0zNS40NTksOS4wMTVoLTguMTQ4VjEuMjUzYzAtMC4zNDUtMC4yOC0wLjYyNS0wLjYyNS0wLjYyNWgtMTUuMjRjLTAuMzQ1LDAtMC42MjUsMC4yOC0wLjYyNSwwLjYyNQ0KCQl2Ny43NjJIMi42NzRjLTAuMzI1LDAtMC41OTksMC4yNTQtMC42MjMsMC41NzhMMC4wMDIsMzYuODM0Yy0wLjAxMywwLjE3MywwLjA0NywwLjM0NSwwLjE2NCwwLjQ3DQoJCWMwLjExNywwLjEyOCwwLjI4NCwwLjIwMSwwLjQ1OSwwLjIwMWgzNi44ODRjMC4xNzUsMCwwLjM0Mi0wLjA3MywwLjQ1OC0wLjJjMC4xMTgtMC4xMjYsMC4xNzgtMC4yOTgsMC4xNjUtMC40NzJsLTIuMDQ5LTI3LjI0DQoJCUMzNi4wNTksOS4yNjksMzUuNzg1LDkuMDE1LDM1LjQ1OSw5LjAxNXogTTI2LjY4NiwxMi45NzZjMC4zMTYsMCwwLjU3MywwLjI1NiwwLjU3MywwLjU3YzAsMC4zMTUtMC4yNTcsMC41NzItMC41NzMsMC41NzINCgkJcy0wLjU3My0wLjI1Ny0wLjU3My0wLjU3MkMyNi4xMTMsMTMuMjMyLDI2LjM3LDEyLjk3NiwyNi42ODYsMTIuOTc2eiBNMTIuMDcxLDEuODc5aDEzLjk5djcuMTM3aC0xMy45OVYxLjg3OXogTTExLjQ0NiwxMi45NzYNCgkJYzAuMzE2LDAsMC41NzMsMC4yNTYsMC41NzMsMC41N2MwLDAuMzE1LTAuMjU3LDAuNTcyLTAuNTczLDAuNTcycy0wLjU3My0wLjI1Ny0wLjU3My0wLjU3Mg0KCQlDMTAuODczLDEzLjIzMiwxMS4xMywxMi45NzYsMTEuNDQ2LDEyLjk3NnogTTEuMjk4LDM2LjI1NmwxLjk1NS0yNS45OWg3LjU2OHYxLjU3OGMtMC42OTcsMC4yNTYtMS4xOTgsMC45Mi0xLjE5OCwxLjcwMw0KCQljMCwxLjAwNSwwLjgxOCwxLjgyMiwxLjgyMywxLjgyMnMxLjgyMy0wLjgxNywxLjgyMy0xLjgyMmMwLTAuNzgzLTAuNTAxLTEuNDQ3LTEuMTk4LTEuNzAzdi0xLjU3OGgxMy45OXYxLjU3OA0KCQljLTAuNjk3LDAuMjU2LTEuMTk4LDAuOTItMS4xOTgsMS43MDNjMCwxLjAwNSwwLjgxOCwxLjgyMiwxLjgyMywxLjgyMmMxLjAwNSwwLDEuODIzLTAuODE3LDEuODIzLTEuODIyDQoJCWMwLTAuNzgzLTAuNTAxLTEuNDQ3LTEuMTk4LTEuNzAzdi0xLjU3OGg3LjU2OWwxLjk1NSwyNS45OUgxLjI5OHoiLz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K'
const search = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEuOTk3IDUxLjk5NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEuOTk3IDUxLjk5NzsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTUxLjkxMSwxNi4yNDJDNTEuMTUyLDcuODg4LDQ1LjIzOSwxLjgyNywzNy44MzksMS44MjdjLTQuOTMsMC05LjQ0NCwyLjY1My0xMS45ODQsNi45MDUNCgkJYy0yLjUxNy00LjMwNy02Ljg0Ni02LjkwNi0xMS42OTctNi45MDZjLTcuMzk5LDAtMTMuMzEzLDYuMDYxLTE0LjA3MSwxNC40MTVjLTAuMDYsMC4zNjktMC4zMDYsMi4zMTEsMC40NDIsNS40NzgNCgkJYzEuMDc4LDQuNTY4LDMuNTY4LDguNzIzLDcuMTk5LDEyLjAxM2wxOC4xMTUsMTYuNDM5bDE4LjQyNi0xNi40MzhjMy42MzEtMy4yOTEsNi4xMjEtNy40NDUsNy4xOTktMTIuMDE0DQoJCUM1Mi4yMTYsMTguNTUzLDUxLjk3LDE2LjYxMSw1MS45MTEsMTYuMjQyeiBNNDkuNTIxLDIxLjI2MWMtMC45ODQsNC4xNzItMy4yNjUsNy45NzMtNi41OSwxMC45ODVMMjUuODU1LDQ3LjQ4MUw5LjA3MiwzMi4yNQ0KCQljLTMuMzMxLTMuMDE4LTUuNjExLTYuODE4LTYuNTk2LTEwLjk5Yy0wLjcwOC0yLjk5Ny0wLjQxNy00LjY5LTAuNDE2LTQuNzAxbDAuMDE1LTAuMTAxQzIuNzI1LDkuMTM5LDcuODA2LDMuODI2LDE0LjE1OCwzLjgyNg0KCQljNC42ODcsMCw4LjgxMywyLjg4LDEwLjc3MSw3LjUxNWwwLjkyMSwyLjE4M2wwLjkyMS0yLjE4M2MxLjkyNy00LjU2NCw2LjI3MS03LjUxNCwxMS4wNjktNy41MTQNCgkJYzYuMzUxLDAsMTEuNDMzLDUuMzEzLDEyLjA5NiwxMi43MjdDNDkuOTM4LDE2LjU3LDUwLjIyOSwxOC4yNjQsNDkuNTIxLDIxLjI2MXoiLz4NCgk8cGF0aCBkPSJNMTUuOTk5LDcuOTA0Yy01LjUxNCwwLTEwLDQuNDg2LTEwLDEwYzAsMC41NTMsMC40NDcsMSwxLDFzMS0wLjQ0NywxLTFjMC00LjQxMSwzLjU4OS04LDgtOGMwLjU1MywwLDEtMC40NDcsMS0xDQoJCVMxNi41NTEsNy45MDQsMTUuOTk5LDcuOTA0eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo='
const user = 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNjAgNjAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDYwIDYwOyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8cGF0aCBkPSJNNDguMDE0LDQyLjg4OWwtOS41NTMtNC43NzZDMzcuNTYsMzcuNjYyLDM3LDM2Ljc1NiwzNywzNS43NDh2LTMuMzgxYzAuMjI5LTAuMjgsMC40Ny0wLjU5OSwwLjcxOS0wLjk1MQ0KCWMxLjIzOS0xLjc1LDIuMjMyLTMuNjk4LDIuOTU0LTUuNzk5QzQyLjA4NCwyNC45Nyw0MywyMy41NzUsNDMsMjJ2LTRjMC0wLjk2My0wLjM2LTEuODk2LTEtMi42MjV2LTUuMzE5DQoJYzAuMDU2LTAuNTUsMC4yNzYtMy44MjQtMi4wOTItNi41MjVDMzcuODU0LDEuMTg4LDM0LjUyMSwwLDMwLDBzLTcuODU0LDEuMTg4LTkuOTA4LDMuNTNDMTcuNzI0LDYuMjMxLDE3Ljk0NCw5LjUwNiwxOCwxMC4wNTYNCgl2NS4zMTljLTAuNjQsMC43MjktMSwxLjY2Mi0xLDIuNjI1djRjMCwxLjIxNywwLjU1MywyLjM1MiwxLjQ5NywzLjEwOWMwLjkxNiwzLjYyNywyLjgzMyw2LjM2LDMuNTAzLDcuMjM3djMuMzA5DQoJYzAsMC45NjgtMC41MjgsMS44NTYtMS4zNzcsMi4zMmwtOC45MjEsNC44NjZDOC44MDEsNDQuNDI0LDcsNDcuNDU4LDcsNTAuNzYyVjU0YzAsNC43NDYsMTUuMDQ1LDYsMjMsNnMyMy0xLjI1NCwyMy02di0zLjA0Mw0KCUM1Myw0Ny41MTksNTEuMDg5LDQ0LjQyNyw0OC4wMTQsNDIuODg5eiBNNTEsNTRjMCwxLjM1Ny03LjQxMiw0LTIxLDRTOSw1NS4zNTcsOSw1NHYtMy4yMzhjMC0yLjU3MSwxLjQwMi00LjkzNCwzLjY1OS02LjE2NA0KCWw4LjkyMS00Ljg2NkMyMy4wNzMsMzguOTE3LDI0LDM3LjM1NCwyNCwzNS42NTV2LTQuMDE5bC0wLjIzMy0wLjI3OGMtMC4wMjQtMC4wMjktMi40NzUtMi45OTQtMy40MS03LjA2NWwtMC4wOTEtMC4zOTZsLTAuMzQxLTAuMjINCglDMTkuMzQ2LDIzLjMwMywxOSwyMi42NzYsMTksMjJ2LTRjMC0wLjU2MSwwLjIzOC0xLjA4NCwwLjY3LTEuNDc1TDIwLDE2LjIyOFYxMGwtMC4wMDktMC4xMzFjLTAuMDAzLTAuMDI3LTAuMzQzLTIuNzk5LDEuNjA1LTUuMDIxDQoJQzIzLjI1MywyLjk1OCwyNi4wODEsMiwzMCwyYzMuOTA1LDAsNi43MjcsMC45NTEsOC4zODYsMi44MjhjMS45NDcsMi4yMDEsMS42MjUsNS4wMTcsMS42MjMsNS4wNDFMNDAsMTYuMjI4bDAuMzMsMC4yOTgNCglDNDAuNzYyLDE2LjkxNiw0MSwxNy40MzksNDEsMTh2NGMwLDAuODczLTAuNTcyLDEuNjM3LTEuNDIyLDEuODk5bC0wLjQ5OCwwLjE1M2wtMC4xNiwwLjQ5NWMtMC42NjksMi4wODEtMS42MjIsNC4wMDMtMi44MzQsNS43MTMNCgljLTAuMjk3LDAuNDIxLTAuNTg2LDAuNzk0LTAuODM3LDEuMDc5TDM1LDMxLjYyM3Y0LjEyNWMwLDEuNzcsMC45ODMsMy4zNjEsMi41NjYsNC4xNTNsOS41NTMsNC43NzYNCglDNDkuNTEzLDQ1Ljg3NCw1MSw0OC4yOCw1MSw1MC45NTdWNTR6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=='

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
      {/* className={!this.state.visible ? "hidden" : ""} */}
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
                  {/* <img src ="http://localhost:8080/static/images/cat.jpg" /> */}
                  <NavLink to="/">Лапкин Дом</NavLink>
                  {/* Lapkin's home */}
                </div>

                <nav className="quicklist">
                  <ul>
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/wallart">Настенное Искусство</NavLink>

                      <div className="quicklist__dropdown quicklist__dropdown__centered">
          
                        <div className="quicklist__childlist">

                          <ul className="quicklist__childlist__grid">

                            <li className="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Темы &amp; Категории
                              </div>
                              <ul>
                                <li>
                                  <NavLink to="/collections/abstract-wall-art" className="quicklist__link" aria-current="page">
                                    Абстракция
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/animal-wall-art" className="quicklist__link">
                                    Животные
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/black-and-white-wall-art" className="quicklist__link">
                                    Черное и белое
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/minimalist-posters" className="quicklist__link">
                                    Минимализм
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/landscape-art" className="quicklist__link">
                                    Природа &amp; Пейзажи
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li>
                          
                            <li class="quicklist__childlist__item">
                              <div className="quicklist__childlist__item__title">
                                Размеры
                              </div>
                              <ul>
                              
                                <li>
                                  <NavLink to="/collections/30x40-posters" className="quicklist__link">
                                    30x40CM
                                  </NavLink>
                                </li>
                              
                                <li>
                                  <NavLink to="/collections/60x90-posters" className="quicklist__link">
                                    60x90CM
                                  </NavLink>
                                </li>
                              
                              </ul>
                            </li>
                          </ul>
                          
                          {/* <div class="last-news-menu">
                            <a href="/collections/new-arrivals">
                              <div class="last-news-title">  
                                New arrivals
                              </div>
                              <div class="last-news-image"> 
                                <img src="//cdn.shopify.com/s/files/1/0077/8718/4241/collections/new-arrivals_500x500.jpg?v=1550078531/" />
                              </div>
                            </a>
                          </div> */}
                        </div>
                      </div>
                     
                    </li>
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/stationary">Канцелярия</NavLink>
                    </li>
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/gifts">Подарки</NavLink>
                    </li>
                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/home">Для дома</NavLink>
                    </li>
                  </ul>
                </nav>
               
              </div>

              <ul className="icons">

                <li className="icon">
                  <NavLink to="/">
                    <span className="icon-user">
                      <img src={`data:image/svg+xml;base64,${user}`} />
                    </span>
                  </NavLink>
                </li>

                <li className="icon">
                  <NavLink to="/">
                    <span className="icon-heart">
                      <img src={`data:image/svg+xml;base64,${search}`} />
                    </span>
                  </NavLink>
                </li>

                <li className="icon">
                  <NavLink to="/cart">
                    <span className="icon-cart">
                      <img src={`data:image/svg+xml;base64,${cart}`} />
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