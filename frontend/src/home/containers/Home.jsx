import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => (
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="gallery">

          <Link to="wallart" className="gallery__item gallery__item--1">
            <img className="gallery__img" src="http://localhost:9000/images/3.jpg" alt=""/>
          </Link>

          <Link to="wallart" className="gallery__item gallery__item--2">
            <img className="gallery__img" src="http://localhost:9000/images/2.jpg" alt=""/>
          </Link>

          <Link to="wallart" className="gallery__item gallery__item--3">
            <img className="gallery__img" src="http://localhost:9000/images/1.jpg" alt=""/>
          </Link>

        </div>
        
      </div>
    </div>
  </div>
)

export default Home