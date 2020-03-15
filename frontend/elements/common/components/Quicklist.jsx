import React, {Component} from 'react';
import { Link } from "react-router-dom";

class Quicklist extends Component{

	constructor(props) {
		super(props);

		this.state = {
			isShow: true,
		};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({isShow: false});
		setTimeout(
			function() {
				this.setState({isShow: true});
			}.bind(this),
			100
		);
	};

	render() {

		const { state } = this;

		return (
			<nav>
				<ul>
					<li >
						<Link
							onClick={() => this.handleChange()}
							className="quicklist-main-link" to="/catalog/wallart/posters-without-frame">Декор</Link>
						<ul className={state.isShow ? '' : 'hidden'}>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/wallart/posters-without-frame">Постеры без рамки</Link>
							</li>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/wallart/framed-posters-plastic">Постеры с пластиковой рамкой</Link>
							</li>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/wallart/framed-posters-wood">Постеры с деревянной рамкой</Link>
							</li>
						</ul>
					</li>
					<li>
						<Link
							onClick={() => this.handleChange()}
							className="quicklist-main-link"  to="/catalog/stationery">Канцелярия</Link>
						<ul className={this.state.isShow ? '' : 'hidden'}>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/stationery/postcards">Открытки</Link>
							</li>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/stationery/notebooks">Тетради</Link>
							</li>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/stationery/diaries">Ежедневники</Link>
							</li>
							<li>
								<Link
									onClick={() => this.handleChange()}
									to="/catalog/stationery/calendars">Календари</Link>
							</li>
						</ul>
					</li>
					<li><Link className="quicklist-main-link" to="/wallart">Link 1</Link></li>
					<li><Link className="quicklist-main-link" to="/wallart">Link 2</Link></li>
				</ul>
			</nav>
		)
	}
}

export default Quicklist;