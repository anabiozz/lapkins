import React from 'react'
import {NavLink} from 'react-router-dom'
import PropTypes from 'prop-types'

const Breadcrumbs = ({ links }) => {

	console.log(links);
	
  return (
		<section className="breadcrumbs">
				{/* <ul>
					{
						links && links.map(link => {
							if (link.isLast) {
								<li>link.name</li>
							} else {
								<li><NavLink to={link.url}>link.name</NavLink></li>
							}
						})
					}
				</ul> */}
		</section>
  )
}

Breadcrumbs.propTypes = {
  links: PropTypes.array.isRequired,
}

export default Breadcrumbs