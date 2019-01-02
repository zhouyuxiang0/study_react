import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: "社会热点",
    imgUrl: ''
  },{
    id: 2,
    title: '手绘',
    imgUrl: ''
  }],
  aritcleList: [{
    id: 1,
    title: '最近一次蚂蚁金服Java面试经历！稳妥了！',
    desc: '今天，我终于辞职了，即将告别6年的程序员生涯。 就在刚刚，微信群里，新晋的领导发出了研发中心的通讯录，让大家核对电话号码是否正确，陆续有同事更正...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11368879-d1a37c1d9456973f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 2,
    title: '最近一次蚂蚁金服Java面试经历！稳妥了！',
    desc: '今天，我终于辞职了，即将告别6年的程序员生涯。 就在刚刚，微信群里，新晋的领导发出了研发中心的通讯录，让大家核对电话号码是否正确，陆续有同事更正...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11368879-d1a37c1d9456973f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 3,
    title: '最近一次蚂蚁金服Java面试经历！稳妥了！',
    desc: '今天，我终于辞职了，即将告别6年的程序员生涯。 就在刚刚，微信群里，新晋的领导发出了研发中心的通讯录，让大家核对电话号码是否正确，陆续有同事更正...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11368879-d1a37c1d9456973f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  },{
    id: 4,
    title: '最近一次蚂蚁金服Java面试经历！稳妥了！',
    desc: '今天，我终于辞职了，即将告别6年的程序员生涯。 就在刚刚，微信群里，新晋的领导发出了研发中心的通讯录，让大家核对电话号码是否正确，陆续有同事更正...',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11368879-d1a37c1d9456973f.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }]
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'MouseEnter':
      return state.set('mouseIn', true);
    case 'MouseLeave':
      return state.set('mouseIn', false);
    default:
      return state;
  }
}
