import { applyMiddleware, combineReducers, createStore } from 'redux';

import { reducer as homeReducer } from '../containers/Home/store';
import thunk from 'redux-thunk';



const reducer  = combineReducers({
  home: homeReducer
})

const getStore = () => {
  return createStore(reducer, applyMiddleware(thunk));
}

export default getStore;
