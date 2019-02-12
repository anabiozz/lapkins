import React, { Component } from 'react';
import Navbar from './common/components/Navbar.jsx';
import { Provider } from 'react-redux';
import configureStore from './_flax/store';
import Main from './Main'

const store = configureStore()

class App extends Component {

  render() {
    return (
      <Provider store={store}>
           <Navbar />
           <Main />
      </Provider>
      
    );
  }
}

export default App;
