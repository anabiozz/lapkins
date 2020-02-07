import { hot } from 'react-hot-loader/root';
import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import Header from './elements/common/containers/Header';
import Footer from './elements/common/components/Footer';
import ErrorBoundary from './elements/common/components/ErrorBoundary';

const App = () => (
  <Fragment>
    <Header />
    <section className="content">
      {renderRoutes(routes)}
    </section>
    <Footer />
  </Fragment>
);

let ExportedApp = App;

if (process.env.DEV) {
  const { setConfig } = require('react-hot-loader');
  setConfig({
    logLevel: 'debug',
    errorReporter: ErrorBoundary,
  });
  ExportedApp = hot(App);
}

export default ExportedApp;
