import React from 'react'
import { Provider } from 'react-redux'
import Navbar from './common/components/Navbar'
import configureStore from './_flax/store'
import Main from './Main'
import { Switch, Route } from 'react-router-dom'
import Home from './home/containers/Home'
import Products from './products/containers/Products'
import Cart from './cart/containers/Cart'
import ProductInfo from './productInfo/containers/ProductInfo'

const coreURL = process.env.CORE_URL ? process.env.CORE_URL : '/'

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Switch>
      <Route exact path={coreURL} component={Home} />
      <Route path={coreURL + "cart"} component={Cart} />
      <Route exact path={coreURL + ":productType"} component={Products} />
      <Route exact path={coreURL + ":productType/:productID"} component={ProductInfo} />
    </Switch>
  </Provider>
)

export default App
