import Home from './elements/home/containers/Home';
import Catalog from './elements/catalog/containers/Catalog';
import Cart from './elements/cart/containers/Cart';
import ProductDescription from './elements/description/containers/ProductDescription';
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
	},
	{
    component: Checkout,
		path: '/checkout',
	},
	{
    component: Done,
		path: '/done',
	},
	{
    component: Wishlist,
		path: '/wishlist',
	},
	{
    component: Registration,
		path: '/registration',
	},
	{
    component: Catalog,
		path: '/new',
	},
	{
    component: Categories,
		path: '/catalog/:category',
		exact: true,
	},
	{
    component: Catalog,
		path: '/catalog/:category/:categoryType',
		exact: true,
	},
	{
		component: ProductDescription,
		path: '/catalog/:category/:categoryType/:variationID',
		exact: true,
	},
	{
    component: NotFound,
		path: '*',
	},
];


