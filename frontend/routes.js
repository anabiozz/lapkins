import Home from './elements/home/containers/Home';
import Products from './elements/products/containers/Products';
import Cart from './elements/cart/containers/Cart';
import ProductDescription from './elements/product_description/containers/ProductDescription';
import Checkout from './elements/cart/containers/Checkout';
import NotFound from './elements/common/components/NotFound';
import Categories from './elements/categories/containers/Categories';
import Done from './elements/cart/components/Done';
import Wishlist from './elements/wishlist/containers/Wishlist';
import Registration from './elements/registration/containers/Registration';

export default [
  {
    component: Home,
    path: '/',
		exact: true,
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
		path: '/catalog/:category',
		exact: true,
		strict: true,
	},
	{
		component: ProductDescription,
		path: '/catalog/:variationID/detail',
		exact: true,
		strict: true,
	},
	{
    component: Products,
		path: '/catalog/:category/:categoryType',
		exact: true,
		strict: true,
	},
	{
    component: NotFound,
		path: '*',
	},
];


