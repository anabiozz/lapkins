import React from 'react';
import {Switch, Route} from 'react-router';

import Home from './elements/home/containers/Home';
import Catalog from './elements/catalog/containers/Catalog';
import Cart from './elements/cart/containers/Cart';
import Description from './elements/description/containers/Description';
import NotFound from './elements/common/components/NotFound';
import Category from './elements/category/containers/Category';
import Done from './elements/cart/components/Done';
import Wishlist from './elements/wishlist/containers/Wishlist';
import Login from './elements/users/containers/Login';
import Registration from './elements/users/containers/Registration';

export default (
	<Switch>
		<Route path='/' component={Home} exact />
		<Route path='/cart' component={Cart} />
		<Route path='/done' component={Done} />
		<Route path='/wishlist' component={Wishlist} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Registration} />
		<Route path='/new' component={Catalog} />
		<Route path='/product/:sku' component={Description} />
		{/*<Route path='/:category' component={Category} exact />*/}
		<Route path='/catalog/:category' component={Catalog} exact />
		<Route path='/catalog/:category/:subcategory' component={Catalog} exact />
		<Route path='*' component={NotFound} />
	</Switch>
);


