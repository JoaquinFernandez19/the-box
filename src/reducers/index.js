import { combineReducers } from 'redux';

//Reducers!
export const workingStateReducer = (working = false, action) => {
	if (action.type === 'START_PROJECT') {
		return (working = true);
	}
	if (action.type === 'RESET_PROJECT') {
		return (working = false);
	}
	return working;
};
//FORM OF CREATING A TASK STATE
export const creatingTodoReducer = (creatingTodo = false, action) => {
	if (action.type === 'CREATING_TODO') {
		return (creatingTodo = true);
	}
	if (action.type === 'CREATE_TODO' || action.type === 'CANCEL_CREATING_TODO') {
		return (creatingTodo = false);
	}
	return creatingTodo;
};

//Todolists!!!!!
export const pendingTodoListReducer = (pendingList = [], action) => {
	//creating a task
	if (action.type === 'CREATE_TODO') {
		const idCreator = pendingList.length;
		const task = {
			id: idCreator,
			text: action.payload.task,
		};
		return [...pendingList, task];
	}

	//deleting a task
	if (action.type === 'DELETE_TODO') {
		return pendingList.filter((task) => {
			if (task.id !== action.payload.taskId) {
				return task;
			} else {
				return null;
			}
		});
	}

	if (action.type === 'RESET_PROJECT') {
		pendingList = [];
	}

	return pendingList;
};

//
export default combineReducers({
	working: workingStateReducer,
	creatingTodo: creatingTodoReducer,
	pendingList: pendingTodoListReducer,
});
