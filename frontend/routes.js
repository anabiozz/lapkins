import Home from './elements/home/containers/Home';
import Products from './elements/products/containers/Products';
import Cart from './elements/cart/containers/Cart';
import Variant from './elements/variant/containers/Variant';
import Checkout from './elements/cart/containers/Checkout';
import NotFound from './elements/common/components/NotFound';
import Categories from './elements/categories/containers/Categories';
import Done from './elements/cart/components/Done';
import Wishlist from './elements/wishlist/containers/Wishlist';
import Registration from './elements/registration/containers/Registration';

export default [
  {
    render: Home,
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
    component: Done,
		path: '/done',
		exact: true,
		strict: true,
	},
	{
    component: Wishlist,
		path: '/wishlist',
		exact: true,
		strict: true,
	},
	{
    component: Registration,
		path: '/registration',
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
    component: Categories,
		path: '/:category',
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
    component: Variant,
		path: '/:category/:categoryType/:productID',
		exact: true,
		strict: true,
	},
	{
    component: NotFound,
		path: '*',
	},
];


