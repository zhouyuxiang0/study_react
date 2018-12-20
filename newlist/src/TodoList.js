import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getInputChangeAction,getBtnClickAction,getItemDelAction } from './store/actionCreator';

const TodoList = (props) => {
  const { inputValue, list, changeInputValue, handleDelete, handleClick } = props;

  return (
    <div>
      <div>
        <input value={inputValue} onChange={changeInputValue} />
        <button onClick={handleClick}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li onClick={() => {props.handleDelete(index)}} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}


const mapStateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    list: state.list
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeInputValue(e) {
      const action = getInputChangeAction(e.target.value);
      dispatch(action);
      //console.log(e.target.value);
    },
    handleClick() {
      const action = getBtnClickAction();
      dispatch(action);
    },
    handleDelete(index) {
      const action = getItemDelAction(index);
      dispatch(action);
    }

  }

}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
