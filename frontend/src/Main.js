import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './home/containers/Home'
import Products from './products/containers/Products'
import ProductInfo from './productInfo/containers/ProductInfo'

const coreURL = process.env.CORE_URL ? process.env.CORE_URL : '/'

const Main = () => (
  
  <main className="main">
    <div className="wrapper">
      <Switch>
        <Route exact path={coreURL} component={Home} />
        <Route exact path={coreURL + ":productType"} component={Products} />
        <Route exact path="/:productType/:productID" component={ProductInfo} />
      </Switch>
    </div>
  </main>
)

export default Main
