import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products  from './postcards/containers/Products'
import Navbar from './common/components/Navbar';
import { Provider } from 'react-redux';
import configureStore from './_flax/store';
import {Link} from 'react-router-dom';


const store = configureStore()

const Topics = ({ match }) => (
  <div>
    <div>
    <img src='/home/almex/projects/go/src/github.com/anabiozz/lapkin-project/images/preview/9f63ff3e-38e4-afec-ccf9-bac576567f70_thumb.jpg' alt=''/>
    </div>

    {/* <Route path={`${match.url}/:topicId`} component={Topic} />
    <Route exact path={match.url} render={() => <h3>Please select a topic.</h3>}/> */}
  </div>
);

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='wrapper'>
          <Navbar />
            <Route exact path='/' render={ () => (
              <React.Fragment>
              <main className="content">
               <Products/>
              </main>
              </React.Fragment>
            )} />
            <Route path="/postcard/:productID" component={Topics} />
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
