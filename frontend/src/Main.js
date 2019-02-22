import React from 'react';
import Products  from './products/containers/Products'
import ProductInfo  from './productInfo/containers/ProductInfo'
import { Switch, Route } from 'react-router-dom';


const Main = () => (
  <main className="main">
    <div className='wrapper'>
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path="/:productType/:productID" component={ProductInfo} />
      </Switch>
    </div>
  </main>
)

export default Main;
