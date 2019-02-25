import { Provider } from 'react-redux';
import React from 'react';
import Routes from '../Routes';
import { StaticRouter } from 'react-router-dom';
import getStore from '../store';
import { renderToString } from 'react-dom/server';




export const render = (req) => {


  const content = renderToString((
    <Provider store={getStore()}>
      <StaticRouter location={req.path} context={{}}>
        {Routes}
      </StaticRouter>
    </Provider>
  ));

  return `
  <html>
    <header>
      <title>ssr</title>
    </header>
    <body>
      <div id='root'>${content}</div>
      <script src='/index.js'></script>
    </body>
  </html>
  `;
}
