import { CHANGE_LIST } from './constants';
import axios from 'axios';


const changeList = (list) => ({
  type: CHANGE_LIST,
  list
})

export const getHomeList = () => {
  return (dispatch) => {
    axios.get('http://localhost:3000/news.json')
    .then((res) => {
      const list = res.data.data;
      console.log(list);
      dispatch(changeList(list))
    });
  }
}
