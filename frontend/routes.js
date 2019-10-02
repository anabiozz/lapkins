import Home from './home/containers/Home.jsx';
import Products from './products/containers/Products.jsx';
import Cart from './cart/containers/Cart';
import ProductVariant from './productVariant/containers/ProductVariant.jsx';
import Checkout from './cart/containers/Checkout';
import NotFound from './common/components/NotFound';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Cart,
		path: '/cart',
		exact: true,
		strict: true,
	},
	{
    component: Checkout,
		path: '/checkout',
		exact: true,
		strict: true,
	},
	{
    component: Products,
		path: '/new',
		exact: true,
		strict: true,
	},
	{
    component: Products,
		path: '/:category/:categoryType',
		exact: true,
		strict: true,
	},
	{
    component: ProductVariant,
		path: '/:category/:categoryType/:productID',
		exact: true,
		strict: true,
	},
	{
    component: NotFound,
		path: '*',
	},
];

