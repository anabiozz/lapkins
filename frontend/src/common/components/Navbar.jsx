import React from 'react'
import {Link} from 'react-router-dom'

export default() => (
  <header className="nav">

    <div className="container">
    
      <div className="row">

        <div className="col-4">
          <div className="logo">
            <Link to="/">Lapkin Home</Link>
          </div>
        </div>

        <div className="col-6 nav-quicklist">
          <ul >
            <li className="drop"><Link to="/products/wallart">Принты</Link></li>
            <li><Link to="/products/stationary">Канцелярия</Link></li>
            <li><Link to="/products/gifts">Подарки</Link></li>
            <li><Link to="/products/wraps">Обертка</Link></li>
          </ul>
        </div>

        <div className="col-2">
          <ul className="icons">

            <li className="icon">
              <Link to="/">
                <span className="icon-search">
                  <img src={require("../../../public/search.svg")} />
                </span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/">
                <span className="icon-user">
                  <img src={require("../../../public/user.svg")} />
                </span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/cart">
                <span className="icon-cart">
                  <img src={require("../../../public/cart.svg")} />
                </span>
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </div>

    {/* <div className="nav-section-container">
      <div className="brand">
        <Link to="/">
            <img/>
        </Link>
      </div>
    </div> */}

    

  </header>
)