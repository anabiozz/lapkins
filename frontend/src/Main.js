import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/containers/Home'
import Products from './products/containers/Products'
import Cart from './cart/containers/Cart'
import ProductInfo from './productInfo/containers/ProductInfo'

const coreURL = process.env.CORE_URL ? process.env.CORE_URL : '/'

const Main = () => (
  <main className="content">
    <Switch>
      <Route exact path={coreURL} component={Home} />
      <Route path={coreURL + "cart"} component={Cart} />
      <Route exact path={coreURL + "products/new"} component={Products} />
      <Route exact path={coreURL + "products/:productType"} component={Products} />
      <Route exact path={coreURL + "products/:productType/:productID"} component={ProductInfo} />
    </Switch>
  </main>
)

export default Main
