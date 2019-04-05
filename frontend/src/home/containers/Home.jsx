import React from 'react'
import {Link} from 'react-router-dom'

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

    // console.log(this.state.elements);
    
    return (
      <div className="container">
      <div className="row">
        <div className="col-12">
          <div style={this.state.elements.length === 3 ? {} : {display: 'none'}} className="gallery">
  
            <Link to="/products/new" className="gallery__item gallery__item--1">
              <img 
                className="gallery__img"
                onLoad={() => this.add()}
                src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/March_2019/homepage_herotile_desktop_02.jpg" alt=""/>
            </Link>
  
            <Link to="/products/wallart" className="gallery__item gallery__item--2">
              <img 
                className="gallery__img" 
                onLoad={() => this.add()}
                src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/March_2019/Boho_HPD_Tile3.jpg" alt=""/>
            </Link>
  
            <Link to="/products/gifts" className="gallery__item gallery__item--3">
              <img 
                className="gallery__img" 
                onLoad={() => this.add()}
                src="https://rndr.juniqe-production.juniqe.com/media/cms/Homepage/Jan_2019/homepage_herotile_desktop_05.jpg" alt=""/>
            </Link>
  
          </div>
          
        </div>
      </div>
    </div>
    )
  }
}

export default Home