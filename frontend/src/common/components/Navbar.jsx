import React from 'react'
import {Link} from 'react-router-dom'

export default() => (
  <header className="nav">

    <div className="nav-section-container">
      <div className="brand">
        <Link to="/">
            <img/>
        </Link>
      </div>
    </div>

    <div className="nav-quicklist">
      <ul >
        <li><Link to="/wallart">Wall Art </Link></li>
        <li>Living</li>
        <li>Stationery</li>
        <li>Gifts</li>
      </ul>
    </div>

  </header>
)