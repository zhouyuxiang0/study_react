const defaultState = {
	inputValue: '',
	list: []
}

//reducer 可以接收state 但不能修改
export default (state = defaultState, action) => {
	if (action.type === 'change_input_value') {
		const newState = JSON.parse(JSON.stringify(state));
		newState.inputValue = action.value;
		return newState;
	}
	if (action.type === 'add_todo_item') {
		const newState =JSON.parse(JSON.stringify(state));
		newState.list.push(newState.inputValue);
		newState.inputValue = '';
		return newState;
	}
	return state;
}
