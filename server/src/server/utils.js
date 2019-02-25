import { Route, StaticRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import React from 'react';
import getStore from '../store';
import { matchRoutes } from 'react-router-config'
import { renderToString } from 'react-dom/server';
import routes from '../Routes';

export const render = (req) => {
  //服务器在走到这里需要拿到数据并填充到store 否则服务器端store为空
  // store里面需要填充什么由用户请求的地址，路由来决定
  // /  home store    /login  login store
  const store = getStore();
  // 让matchRoutes里面所有的组件，对应的loadData方法执行一次
  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = [];
  matchedRoutes.forEach(item => {
    if (item.route.loadData) {
      promises.push(item.route.loadData(store))
    }
  })

  Promise.all(promises).then(() => {
    console.log(store.getState());
  })

  const content = renderToString((
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <div>
          {routes.map(route =>  (
            <Route {...route} />
          ))}
        </div>
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
