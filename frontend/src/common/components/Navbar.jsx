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
            <li className="drop">
              <Link to="/wallart">Принты</Link>
              <ul className="dropdown">
                <li><Link to="/">Home 1</Link></li>
                <li><Link to="/">Home 2</Link></li>
                <li><Link to="/">Home 3</Link></li>
              </ul>
            </li>
            <li><Link to="/stationary">Канцелярия</Link></li>
            <li><Link to="/gifts">Подарки</Link></li>
            <li><Link to="/gifts">Обертка</Link></li>
          </ul>
        </div>

        <div className="col-2">
          <ul className="icons">

            <li className="icon">
              <Link to="/">
                <span className="icon-search"></span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/">
                <span className="icon-user"></span>
              </Link>
            </li>

            <li className="icon">
              <Link to="/">
                <span className="icon-cart"></span>
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