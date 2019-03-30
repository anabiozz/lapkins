import React from 'react'
import {Link} from 'react-router-dom'

export default() => (
  <header className="nav">

    <div className="container">
    
      <div className="row">

        <div className="col-2">
          <div className="logo">
            <Link to="/">Lapkin Home</Link>
          </div>
        </div>

        <div className="col-8 nav-quicklist">
          <ul >
            <li className="drop">
              <Link to="/wallart">Декор Стен</Link>
              <ul className="dropdown">
                <li><Link to="/">Home 1</Link></li>
                <li><Link to="/">Home 2</Link></li>
                <li><Link to="/">Home 3</Link></li>
              </ul>
            </li>
            <li><Link to="/stationary">Канцелярия</Link></li>
            <li><Link to="/gifts">Подарки</Link></li>
          </ul>
        </div>

        <div className="col-2">
          <ul className="icons">

            <li className="icon">
              <span className="icon-search"></span>
            </li>

            <li className="icon">
              <span className="icon-user"></span>
            </li>

            <li className="icon">
              <span className="icon-cart"></span>
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