import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import App from '../frontend/App';
import { CookiesProvider } from 'react-cookie';

export default (path, context) => {
  const content = renderToString(
    <CookiesProvider>
      <Router location={path} context={context}>
       <App />
      </Router>
    </CookiesProvider>
  );

  const jsBundle = process.env.NODE_ENV === 'production' ? 'bundle-prod.js' : 'bundle-dev.js';

  return `
	<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Roboto+Mono&display=swap" rel="stylesheet">
		 <link href="https://fonts.googleapis.com/css?family=Fira+Code&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" rel="stylesheet">
    <title>Лапкин дом</title>
    
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
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div class="root">${content}</div>
<!--    <div class="divLoader">-->
<!--      <svg class="svgLoader" viewBox="0 0 1024 1024" width="10em" height="10em">-->
<!--        <path fill="lightblue"-->
<!--          m="PATH FOR THE LOADER ICON"-->
<!--        />-->
<!--      </svg>-->
<!--    </div>-->
    <script src="/${jsBundle}"></script>
  </body>
  </html>`;
};

