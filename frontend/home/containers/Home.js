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
      // style={this.state.elements.length === 3 ? {} : {display: 'none'}} 
      <div className="gallery">

        <NavLink to="/new" className="gallery__item gallery__item__1">
          <img 
            className="gallery__img"
            onLoad={() => this.add()}
            src="static/images/3.jpeg" alt="Новое" />
          <div className="content">
            <h1>Новое</h1>
          </div>
        </NavLink>

        <NavLink to="/wallart" className="gallery__item gallery__item__2">
          <img 
            className="gallery__img" 
            onLoad={() => this.add()}
            src="static/images/1.jpg" alt="Постеры" />
          <div className="content">
            <h1>Постеры</h1>
          </div>
        </NavLink>

        <NavLink to="/gifts" className="gallery__item gallery__item__3">
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