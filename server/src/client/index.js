import { BrowserRouter, Route } from 'react-router-dom';

import { Provider } from 'react-redux';
import React from 'react';
import ReactDom from 'react-dom';
import getStore from '../store';
import routes from '../Routes';




const App = () => {
  return (
    <Provider store={getStore()}>
      <BrowserRouter>
        <div>
          {routes.map(route =>  (
            <Route {...route} />
          ))}
        </div>
      </BrowserRouter>
    </Provider>
  )
}


ReactDom.hydrate(<App />, document.getElementById('root'));
