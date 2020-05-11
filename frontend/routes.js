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
import Layout from './elements/common/containers/Layout';


export default [
	{
		component: Layout,
		routes: [
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
				component: Done,
				path: '/done',
			},
			{
				component: Wishlist,
				path: '/wishlist',
			},
			{
				component: Login,
				path: '/login',
			},
			{
				component: Registration,
				path: '/register',
			},
			{
				component: Catalog,
				path: '/new',
			},
			{
				component: Description,
				path: '/product/:sku',
			},
			{
				component: Category,
				path: '/:category',
				exact: true,
			},
			{
				component: Catalog,
				path: '/:category/:subcategory',
				exact: true,
			},
			{
				component: NotFound,
				path: '*',
			},
		]
	},
];


