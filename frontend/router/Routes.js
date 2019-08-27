import Home from '../home/containers/Home'
import Products from '../products/containers/Products'
import Cart from '../cart/containers/Cart'
import ProductDescription from '../productInfo/containers/ProductDescription'

// const coreURL = process.env.CORE_URL ? process.env.CORE_URL : '/'

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

// export default () => {
//   return(
//     <div>
//       <Route exact path={coreURL} component={Home} />
//       <Route path={coreURL + "cart"} component={Cart} />
//       <Route exact path={coreURL + "products/new"} component={Products} />
//       <Route exact path={coreURL + "products/:productType"} component={Products} />
//       <Route exact path={coreURL + "products/:productType/:productID"} component={ProductDescription} />
//     </div>
//   );
// };



