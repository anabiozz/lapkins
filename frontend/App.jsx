import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from './common/components/Header';
import Footer from './common/components/Footer';
import ErrorBoundary from './common/components/ErrorBoundary.jsx';

const App = ({path}) => (
  <Router location={path} >
    <Fragment>
      <Header />
      <section className="content">
        {renderRoutes(routes)}
      </section>
      <Footer />
    </Fragment>
  </Router>
)

let ExportedApp = App;

if (process.env.DEV) {
  const { setConfig } = require('react-hot-loader')
  setConfig({
    logLevel: 'debug',
    errorReporter: ErrorBoundary,
  });
  ExportedApp = hot(App);
}

export default ExportedApp;
