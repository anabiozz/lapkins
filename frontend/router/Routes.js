import Home from '../home/containers/Home'
import Products from '../products/containers/Products'
import Cart from '../cart/containers/Cart'
import ProductDescription from '../product_desc/containers/ProductDescription'

export default [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: Cart,
    path: '/cart'
	},
	{
    component: Products,
		path: '/wallart',
		exact: true
	},
	{
    component: Products,
		path: '/wallart/new',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/wallart/:productID',
		exact: true
  }
];


