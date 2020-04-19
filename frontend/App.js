import React from 'react';
import { hot } from 'react-hot-loader/root';
import { renderRoutes } from 'react-router-config';
import routes from './routes';
import ErrorBoundary from './elements/common/components/ErrorBoundary';

const App = () => (
  renderRoutes(routes)
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
