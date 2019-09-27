import Home from '../home/containers/Home';
import Products from '../products/containers/Products';
import Cart from '../cart/containers/Cart';
import ProductDescription from '../product_desc/containers/ProductDescription';
import Checkout from '../cart/containers/Checkout';
import NotFound from '../common/components/NotFound';

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Cart,
		path: '/cart',
		exact: true
	},
	{
    component: Checkout,
		path: '/checkout',
		exact: true
	},
	{
    component: Products,
		path: '/new',
		exact: true
	},
	{
    component: Products,
		path: '/:category/:categoryType',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/:category/:categoryType/:productID',
		exact: true
	},
	{
    component: NotFound,
		path: '*',
	},
];


