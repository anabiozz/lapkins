import React from 'react';
import {NavLink} from "react-router-dom";

const Icons = () => {
	return <ul className="icons">
		<li className="icon">
			<NavLink to="/cart">
				<span className="icon-cart">
					<img src="/static/images/cart.png" alt="cart"/>
				</span>
			</NavLink>
		</li>
	</ul>
};

export default Icons