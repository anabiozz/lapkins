import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Products  from './postcards/containers/Products'
import Navbar from './common/components/Navbar';
import { Provider } from 'react-redux';
import configureStore from './_flax/store';

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className='app'>
          <Navbar />
            <div className='container'>
            <Route exact path='/' render={ () => (
              <React.Fragment>
                <Products/>
              </React.Fragment>
            )} />
            </div>
          </div>
        </Router>
      </Provider>
      
    );
  }
}

export default App;
