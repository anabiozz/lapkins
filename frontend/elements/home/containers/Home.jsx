import React from 'react';
import { NavLink } from 'react-router-dom';
import { withCookies } from 'react-cookie';
import { connect } from 'react-redux';
import { createUserSessionRequest } from '../actions';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			elements: [],
		};
	}

	componentDidMount() {

	}

	add() {
		this.setState({
			elements: [...this.state.elements, this.state.elements.length++]
		});
	}

	render() {

		return (
			<div
				style={this.state.elements.length === 3 ? {} : {display: 'none'}}
				className="gallery">

				<div className="gallery">

					<NavLink to="/new" className="gallery__item gallery__item__1">
						<img
							className="gallery__img"
							onLoad={() => this.add()}
							src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Новое" />

						<div className="content">
							<h2>Новое</h2>
						</div>
					</NavLink>

					<NavLink to="/wallart" className="gallery__item gallery__item__2">
						<img
							className="gallery__img"
							onLoad={() => this.add()}
							src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/set_014_720x.jpg?v=1550063513" alt="Постеры" />
						<div className="content">
							<h2>Постеры</h2>
						</div>
					</NavLink>

					<NavLink to="/stationery" className="gallery__item gallery__item__3">
						<img
							className="gallery__img"
							onLoad={() => this.add()}
							src="https://cdn.shopify.com/s/files/1/0077/8718/4241/files/Set_028_1950x.jpeg?v=1550063217" alt="Канцелярия" />
						<div className="content">
							<h2>Канцелярия</h2>
						</div>
					</NavLink>

				</div>
			</div>

		)
	}
}

const mapStateToProps = (state, ownProps) => ({
	userSession: state.home.userSession,
	cookies: ownProps.cookies,
});

export default withCookies(connect( mapStateToProps, { createUserSessionRequest } )(Home))