import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './common/components/Navbar';
import Footer from './common/components/Footer';
import configureStore from './_flax/store';
import Main from './Main';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Navbar />
    <Main />
    <Footer />
  </Provider>
)

export default App
