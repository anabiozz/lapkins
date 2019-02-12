import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  render() {
    return (
    <header className='cartichka_nav_fixed'>
      <div className='cartichka_nav_inner'>
        <div className='cartichka_nav_group cartichka_nav_header'>
          <Link to='/' className='logo'>
            <span>
                Lapkin
                design
            </span></Link>
        </div>
      </div>
    </header>
    )
  }
}

export default Navbar
