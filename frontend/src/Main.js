import React from 'react';
import Products  from './postcards/containers/Products'
import { Switch, Route } from 'react-router-dom';


const Topics = ({ match }) => (
  <div>
    <div>
      <img src='/home/almex/projects/go/src/github.com/anabiozz/lapkin-project/images/preview/9f63ff3e-38e4-afec-ccf9-bac576567f70_thumb.jpg' alt=''/>
    </div>
  </div>
);

const Main = () => (
  <main className="main">
    <div className='wrapper'>
      <Switch>
        <Route exact path='/' component={Products} />
        <Route path="/postcard/:productID" component={Topics} />
      </Switch>
    </div>
  </main>
)

export default Main;
