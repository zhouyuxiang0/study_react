import { CHANGE_INPUT_VALUE,ADD_ITEM,DEL_ITEM } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
})
export const getBtnClickAction = () => ({
  type: ADD_ITEM,
})
export const getItemDelAction = (index) => ({
  type: DEL_ITEM,
  index
})
