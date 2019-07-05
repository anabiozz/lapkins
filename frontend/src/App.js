import React from 'react';
import { Provider } from 'react-redux';
import Header from './common/components/Header';
import Footer from './common/components/Footer';
import configureStore from './_flax/store';
import Main from './Main';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <Header />
    <Main />
    <Footer />
  </Provider>
)

export default App
