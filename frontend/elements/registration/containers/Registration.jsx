import React, { Component } from 'react';
import Breadcrumbs from '../../common/components/Breadcrumbs';

export default class Registration extends Component {
	render() {
		return (
			<div className="registration">
				<section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs />
          </div>
        </section>
				<div className="registration__content">
					Регистрация
				</div>
			</div>
		)
	}
}
