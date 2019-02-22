import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
    <header className='nav'>
      <div className='nav_section_container'>
        <div className="nav_branding">
          <Link to='/' className='logo'>
            <div>
              Lapkin
            </div>
            <div>
              Design
            </div>
          </Link>
        </div>
      </div>
      <div className='nav_quicklist'></div>
    </header>
    )
  }
}

export default Navbar
