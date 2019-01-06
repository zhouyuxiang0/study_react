import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';

class List extends PureComponent {

  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className='pic' src={item.get('imgUrl')} alt='' />
                <ListInfo>
                  <Link className='title' to={'/detail/' + item.get('id')}>{item.get('title')}</Link>
                  <p className='desc'>{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            );
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    )
  }
  
}

const mapState = (state) => ({
  list: state.getIn(['home', 'articleList']),
  page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
})

export default connect(mapState, mapDispatch)(List);
