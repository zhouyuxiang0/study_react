import React, { Component } from 'react';

import Header from '../../components/Header';
import { connect } from 'react-redux';
import { getHomeList } from './store/action';



class Home extends Component {
  getList() {
    const { list } = this.props;
    return list.map(item => <div key={item.id}>{item.title}</div>)
  }
  render() {
    return (
      <div>
        <Header />
        <div>this is {this.props.name}</div>
        {this.getList()}
        <button onClick={() => {alert('click')}}>click</button>
      </div>
    )
  }

  componentDidMount() {
    this.props.getHomeList();
  }
}

const mapStateToProps = state => ({
  list: state.home.newsList,
  name: state.home.name
})

const mapDispatchToProps = dispatch => ({
  getHomeList() {
    dispatch(getHomeList());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
