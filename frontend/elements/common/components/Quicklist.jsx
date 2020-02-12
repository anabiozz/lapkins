import React from 'react';
import {NavLink} from "react-router-dom";

const Quicklist = () => {
	return <nav  className="quicklist">

		<ul className="quicklist_ul">

			<li className="quicklist__has__dropdown">
				<NavLink className="quicklist_main_link" to="/wallart">Декор</NavLink>

				<div className="quicklist__dropdown">
					<div className="quicklist__childlist">
						<ul className="quicklist__childlist__grid">
							<li className="quicklist__childlist__item">
								<div className="quicklist__childlist__item__title">Постеры</div>
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
						</ul>
					</div>
				</div>
			</li>

			<li className="quicklist__has__dropdown">
				<NavLink className="quicklist_main_link"  to="/stationery">Канцелярия</NavLink>
					<div className="quicklist__dropdown">
						<div className="quicklist__childlist">
							<ul className="quicklist__childlist__grid">
								<li className="quicklist__childlist__item">
									<div className="quicklist__childlist__item__title">Продукты</div>
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
							</ul>
						</div>
				</div>
			</li>

			{/* <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/gifts">Подарки</NavLink>
                    </li>

                    <li className="quicklist__has__dropdown quicklist__has__dropdown__centered">
                      <NavLink className="quicklist_main_link" to="/home">Для дома</NavLink>
                    </li> */}

		</ul>
	</nav>
};

export default Quicklist