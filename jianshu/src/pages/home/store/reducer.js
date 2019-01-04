import { fromJS } from 'immutable';

const defaultState = fromJS({
  topicList: [],
  aritcleList: [],
  recommendList: []
});

export default (state = defaultState, action) => {
  switch (action.type) {
    case 'change_home_data':
      return state.merge({
        topicList: fromJS(action.topicList),
        aritcleList: fromJS(action.aritcleList),
        recommendList: fromJS(action.recommendList)
      })
    default:
      return state;
  }
}
