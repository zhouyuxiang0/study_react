import React, { Component } from 'react';
import { connect } from 'react-redux';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import axios from 'axios';
import {
  HomeWrapper,
  HomeLeft,
  HomeRight
 } from './style';

class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4594/a3efadd311cbd8ac4ef2af3cf89f65f93e730bf1.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt='' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
      </HomeWrapper>
    )
  }

  componentDidMount() {
    axios.get('api/home.json').then((res) => {
      const result = res.data.data;
      const action = {
        type: 'change_home_data',
        topicList: result.topicList,
        aritcleList: result.aritcleList,
        recommendList: result.recommendList
      }
      this.props.changeHomeData(action);
    })
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(action) {
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home);
