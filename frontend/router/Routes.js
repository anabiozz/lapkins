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
		path: '/products/new',
		exact: true
	},
	{
    component: Products,
		path: '/products/:productType',
		exact: true
	},
	{
    component: ProductDescription,
		path: '/products/:productType/:productID',
		exact: true
  }
];


