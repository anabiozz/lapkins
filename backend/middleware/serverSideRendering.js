import React from 'react';
import { renderToString } from 'react-dom/server';
import match from 'react-router/lib/match';
import RouterContext from 'react-router/lib/RouterContext';
import configureStore from '../../frontend/_flux/store';
import Provider from 'react-redux/lib/components/Provider'
import routesFull from '../../frontend/routes';
import routesEx from '../../frontend/routesEx';
import config from '../configs/config';
import { settings } from '../controllers';
import co from 'co';

function* generateInitialSettings(props, response, user) {
  try {
    let initialState = JSON.parse(JSON.stringify(config.initialState));

    if(user) {
      initialState.user.name = user.uuid;
    }
    let settingsData = yield settings.get();
    if(settingsData.length == 0 )
      settingsData = yield settings.initSettings();
    else if( settingsData[0].version != initialState.settings.version) {
      settingsData = yield settings.initSettings();
    }

    initialState.settings.admins = settingsData[0].admins
    initialState.settings.interval = settingsData[0].interval
    initialState.settings.regions = settingsData[0].regions
    initialState.settings.slo_metrics = settingsData[0].slo_metrics
    initialState.settings.APItoken = settingsData[0].APItoken
    initialState.settings.version = settingsData[0].version
    initialState.settings.adfs = settingsData[0].adfs

    const store = configureStore(initialState);
    try {
      const appHtml = renderToString(
        <Provider store={store}>
          <RouterContext {...props} />
        </Provider>
      );
      response.send(renderPage(appHtml, store))
    } catch(e) {
      console.error(e)
      response.send('[ERROR] for details view server logs!')
    }

    return store;
  } catch (e) {
    console.log(e);
  }
}

const getInitialSettings = ( props, response, user ) => {
  co( generateInitialSettings( props, response, user ) ).then((result) => {
    return (result);
  }).catch(() => {
    response.send('[ERROR] for details view server logs!')
  });
}

module.exports = function (request, response, next) {
  console.log('Middleware Url is: ' + request.url);
  console.log('CORE_URL: ' + process.env.CORE_URL);
  response.setHeader('Last-Modified', (new Date()).toUTCString());
  let routes = process.env.NODE_MODE == 'executive' ? routesEx : routesFull;

  match({ routes: routes(request.user), location: request.url }, (err, redirect, props) => {
    if (err) {
      console.log('Warning: serverSideRendering middleware routing failed, try backend routing');
      next()
    } else if (redirect) {
      console.log('Log: serverSideRendering middleware trigger redirect');
      request.session.redirectURL = request.url;
      response.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      console.log('Log: serverSideRendering middleware found route');
      getInitialSettings(props, response, request.user);
    } else {
      console.log('Log: serverSideRendering middleware does\'t found route, try backend routing');
      next()
    }
  })
}

function renderPage(appHtml, store) {
  const finalState = store.getState();

  const ex = process.env.NODE_MODE == 'executive' ? '.ex' : ''
  const jsBundle = process.env.NODE_ENV === 'production' ? 'bundle-prod'+ex+'.js' : 'bundle-dev.js';
  return `<!DOCTYPE html>
    <html>
    <head>
      <!-- Latest compiled and minified CSS -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css">
      <!-- Optional theme -->
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap-theme.min.css">
      <link rel="stylesheet" href="${process.env.CORE_URL}css/style.css">
      <link rel="icon" href="${process.env.CORE_URL}favicon.ico" type="image/x-icon" />
      <title>POLYCOM AQUA</title>
      <script>
          window.__INITIAL_STATE__ = ${JSON.stringify(finalState)}
      </script>
    </head>
    <body>
    <div id="root">${appHtml}</div>
    <script src="${process.env.CORE_URL}dist/${jsBundle}"></script>
    </body>
    </html>`
}
