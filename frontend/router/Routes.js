import Home from '../home/containers/Home'
import Products from '../products/containers/Products'
import Cart from '../cart/containers/Cart'
import ProductDescription from '../product_desc/containers/ProductDescription'
import Checkout from '../cart/containers/Checkout'

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
		path: '/wallart/posters',
		exact: true,
	},
	{
    component: Products,
		path: '/wallart/framed-posters',
		exact: true
	},
	{
    component: Products,
		path: '/wallart/framed-posters-wood',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/wallart/posters/:productID',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/wallart/framed-posters/:productID',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/wallart/framed-posters-wood/:productID',
		exact: true
	},
	{
    component: Products,
		path: '/stationary',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/stationary/:productID',
		exact: true
	},
];


