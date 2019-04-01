import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="gallery">

          <Link to="wallart" className="gallery__item gallery__item--1">
            <img className="gallery__img" src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/March_2019/homepage_herotile_desktop_02.jpg" alt=""/>
          </Link>

          <Link to="wallart" className="gallery__item gallery__item--2">
            <img className="gallery__img" src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/March_2019/Boho_HPD_Tile3.jpg" alt=""/>
          </Link>

          <Link to="wallart" className="gallery__item gallery__item--3">
            <img className="gallery__img" src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/Jan_2019/homepage_herotile_desktop_05.jpg" alt=""/>
          </Link>

        </div>
        
      </div>
    </div>
  </div>
)

export default Home