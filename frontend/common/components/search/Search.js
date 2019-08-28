import React from 'react';

const Search = () => {
	return <div className="search">
		<div className="search__box">
			<div className="search__box__container">
				<input type="search" id="search" placeholder="Найди все что хочешь" />
				<button className="icon">Поиск</button>
			</div>
		</div>
	</div>
}

export default Search