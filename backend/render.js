import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter as Router } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Header from '../frontend/elements/common/containers/Header';
import Footer from '../frontend/elements/common/components/Footer';

export default (path, store, context, routes) => {
  const content = renderToString(
    <Provider store={store}>
      <Router location={path} context={context}>
				<Fragment>
					<Header />
          <section className="content">
            {renderRoutes(routes)}
          </section>
					<Footer />
				</Fragment>
      </Router>
    </Provider>
  );
  const jsBundle = process.env.NODE_ENV === 'production' ? 'bundle-prod.js' : 'bundle-dev.js';
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <title>Лапкин дом</title>
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root">${content}</div>
    <script>
      window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
    </script>
    <script src="/${jsBundle}"></script>
  </body>
  </html>
  `;
};

