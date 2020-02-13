import React from 'react';
import {
	NavLink
} from "react-router-dom";

const Quicklist = () => {
	return <nav>
	<ul className="nav">
		<li>
		<NavLink className="quicklist_main_link" to="/wallart">Декор</NavLink>
			<ul>
				<li>
					<NavLink
						to="/wallart/posters-without-frame"
						className="quicklist__link">
						Постеры без рамки
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/wallart/framed-posters-plastic"
						className="quicklist__link">
						Постеры с пластиковой рамкой
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/wallart/framed-posters-wood"
						className="quicklist__link">
						Постеры с деревянной рамкой
					</NavLink>
				</li>
			</ul>
		</li>
		<li>
			<NavLink className="quicklist_main_link"  to="/stationery">Канцелярия</NavLink>
			<ul>
				<li>
					<NavLink
						to="/stationery/postcards"
						className="quicklist__link">
						Открытки
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/stationery/notebooks"
						className="quicklist__link">
						Тетради
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/stationery/diaries"
						className="quicklist__link">
						Ежедневники
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/stationery/calendars"
						className="quicklist__link">
						Календари
					</NavLink>
				</li>
			</ul>
		</li>
		<li><a href="#">Link 4</a></li>
		<li><a href="#">Link 5</a></li>
	</ul>
</nav>
};

export default Quicklist;