import React from 'react'
import {NavLink} from 'react-router-dom'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {
      elements: [],
    }
  }

  add() {
    this.setState({
      elements: [...this.state.elements, this.state.elements.length++]
    })
  }

  render() {

    return (
      <div style={this.state.elements.length === 3 ? {} : {display: 'none'}} className="gallery">

      <NavLink to="/products/new" className="gallery__item gallery__item__1">
        <img 
          className="gallery__img"
          onLoad={() => this.add()}
          src="static/images/3.jpeg" alt="Новое" />
        <div className="content">
          <h1>Новое</h1>
        </div>
      </NavLink>

      <NavLink to="/products/wallart" className="gallery__item gallery__item__2">
        <img 
          className="gallery__img" 
          onLoad={() => this.add()}
          src="static/images/1.jpg" alt="Открытки" />
        <div className="content">
          <h1>Открытки</h1>
        </div>
      </NavLink>

      <NavLink to="/products/gifts" className="gallery__item gallery__item__3">
        <img 
          className="gallery__img" 
          onLoad={() => this.add()}
          src="static/images/4.jpg" alt="Подарки" />
        <div className="content">
          <h1>Подарки</h1>
        </div>
      </NavLink>
    </div>
    )
  }
}

export default Home