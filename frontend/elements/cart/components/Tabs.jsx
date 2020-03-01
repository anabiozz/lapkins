import React from 'react';
import PropTypes from "prop-types";
import Counter from '../../common/components/Counter';

const Tabs = ({ state, onClick }) => {

	return <div className="order-type-tabs">

		<div className={!state.isDelivery ? 'tabs-tab tabs-tab-active': 'tabs-tab'} onClick={onClick}>
			<div className="tabs-tab-icon">
				<svg width="40" height="30" viewBox="0 0 40 30" xmlns="http://www.w3.org/2000/svg">
					<g fill="currentColor" fillRule="nonzero">
						<path d="M38 8v20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8H1a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h38a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-1zm-2 0H4v20h32V8zM2 2v4h36V2H2z" />
						<path d="M15 12a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2H15zm0-1h10a2 2 0 1 1 0 4H15a2 2 0 1 1 0-4z" />
					</g>
				</svg>
			</div>
			<div className="tabs__tab__text">Самовывоз</div>
		</div>

		<div className={state.isDelivery ? 'tabs-tab tabs-tab-active': 'tabs-tab'} onClick={onClick}>
			<div className="tabs-tab-icon">
				<svg width="44" height="30" viewBox="0 0 44 30" xmlns="http://www.w3.org/2000/svg">
					<path
						d="M39.9 26a5.002 5.002 0 0 1-9.8 0H15.9a5.002 5.002 0 0 1-9.8 0H2.014A2.006 2.006 0 0 1 0 24.003V1.997C0 .894.9 0 2.014 0h23.972C27.098 0 28 .895 28 1.997V4h8l8 10.107V26h-4.1zM42 16H28v8h2.1a5.002 5.002 0 0 1 9.8 0H42v-8zm-.635-2l-6.333-8H28v8h13.365zM15.9 24h10.086C25.998 24 26 1.997 26 1.997 26 2.003 2.014 2 2.014 2 2.002 2 2 24.003 2 24.003c0-.002 1.657-.002 4.1-.003a5.002 5.002 0 0 1 9.8 0zM11 28a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm24 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
						fill="currentColor"
						fillRule="evenodd" />
				</svg>
			</div>
			<div className="tabs__tab__text">Доставка по адресу</div>
		</div>

	</div>
};

export default Tabs