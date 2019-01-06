import React, { Component } from 'react';
import { GlobalStyle } from './style';
import { GlobalIcon } from './statics/iconfont/iconfont';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './common/header';
import store from './store';
import { Provider } from 'react-redux';
import Home from './pages/home';
import Detail from './pages/detail';
import Login from './pages/login';
import Write from './pages/write';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <GlobalStyle />
            <GlobalIcon />
            <Header />
            <Route path='/' exact component={Home} />
            <Route path='/login' exact component={Login} />
            <Route path='/write' exact component={Write} />
            <Route path='/detail/:id' exact component={Detail} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
