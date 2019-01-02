import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  ListItem,
  ListInfo
} from '../style';

class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'aritcleList'])
})
export default connect(mapState)(List);
