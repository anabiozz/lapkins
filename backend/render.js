import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../frontend/router/Routes';
import Header from '../frontend/common/components/Header';
import Footer from '../frontend/common/components/Footer';

export default (pathname, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
				<Fragment>
					<Header />
					<section>{renderRoutes(Routes)}</section>
					<Footer />
				</Fragment>
      </StaticRouter>
    </Provider>
  );

  return `
  <!DOCTYPE html>
      <html lang="en">
      <head>
				<meta charset="UTF-8">
				<link href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono&display=swap" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Anonymous+Pro" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Jura" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Mrs+Sheppards" rel="stylesheet">
				<link href="https://fonts.googleapis.com/css?family=Josefin+Sans:100" rel="stylesheet">
        <title>Title</title>
      </head>
      <body>
      <div id="root">${content}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
      </script>
      <script src="static/bundle-dev.js"></script>
      </body>
      </html>
  `;
};