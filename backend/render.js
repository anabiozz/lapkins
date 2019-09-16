import React, { Fragment } from 'react';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter, Link } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import Routes from '../frontend/router/Routes';
import Header from '../frontend/common/components/Header';
import Footer from '../frontend/common/components/Footer';
import Breadcrumbs from '../frontend/common/components/breadcrumbs/Breadcrumbs';
import Search from '../frontend/common/components/search/Search';

const UserBreadcrumb = ({ match }) =>
  <span>{match.params.userId}</span>; // use match param userId to fetch/display user name

const routes = [
  { path: 'users', breadcrumb: 'Users' },
  { path: 'users/:userId', breadcrumb: UserBreadcrumb},
  { path: 'something-else', breadcrumb: ':)' },
];

export default (pathname, store, context) => {
  console.log(JSON.stringify(store.getState()));
  
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={pathname} context={context}>
				<Fragment>

					<Header />

          {/* <section className="search_content">
            <div className="search_wrapper">
              <Search />
              <Breadcrumbs />
            </div>
          </section> */}

          <section className="content">
            {renderRoutes(Routes)}
          </section>

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
				<link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css?family=Josefin+Sans:100,300,400,600,700&display=swap" rel="stylesheet">
        <title>Title</title>
        <style>
          .svgLoader {
            animation: spin 0.5s linear infinite;
            margin: auto;
          }
          .divLoader {
            width: 100vw;
            height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        </style>
      </head>
      <body>
      <div id="root">
        <div class="divLoader">
          <svg class="svgLoader" viewBox="0 0 1024 1024" width="10em" height="10em">
            <path fill="lightblue"
              d="PATH FOR THE LOADER ICON"
            />
          </svg>
        </div>
        ${content}
      </div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(store.getState())}
      </script>
      <script src="static/bundle-dev.js"></script>
      </body>
      </html>
  `;
};