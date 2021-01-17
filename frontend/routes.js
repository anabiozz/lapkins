import React from 'react';
import {Switch, Route} from 'react-router';

import Home from './components/home/containers/Home';
import Catalog from './components/products/containers/Products';
import Cart from './components/cart/containers/Cart';
import Product from './components/product/containers/Product';
import NotFound from './components/common/NotFound';
import Superordinate from './components/category/containers/Superordinate';
import Done from './components/cart/components/Done';
import Wishlist from './components/wishlist/containers/Wishlist';
import Login from './components/users/containers/Login';
import Registration from './components/users/containers/Registration';

export default (
	<Switch>
		<Route path='/' component={Home} exact />
		<Route path='/cart' component={Cart} />
		<Route path='/done' component={Done} />
		<Route path='/wishlist' component={Wishlist} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Registration} />
		<Route path='/new' component={Catalog} />
		<Route path='/product/:sku' component={Product} />
		<Route path='/catalog/:superordinate' component={Superordinate} exact />
		<Route path='/catalog/:superordinate/:basic' component={Catalog} exact />
		<Route path='*' component={NotFound} />
	</Switch>
);


