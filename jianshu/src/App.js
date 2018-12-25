import React, { Component } from 'react';
import {GlobalStyle} from './style';
import {GlobalIcon} from './statics/iconfont/iconfont';
import Header from './common/header';

class App extends Component {
  render() {
    return (
      <div className="del">
        <Header />
        <GlobalStyle />
        <GlobalIcon />
      </div>
    );
  }
}

export default App;
