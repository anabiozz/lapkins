import React, { Component } from 'react';
import Breadcrumbs from '../../common/Breadcrumbs';

export default class Wishlist extends Component {
	render() {
		return (
			<div className="wishlist">
			 <section className="search_content">
          <div className="search_wrapper">
            <Breadcrumbs />
          </div>
        </section>
				<div className="wishlist__content">
					Список моих желаний.
				</div>
			</div>
		)
	}
}
