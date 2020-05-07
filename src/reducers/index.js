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
export const pendingTodoListReducer = (taskList = [], action) => {
	//creating a task
	if (action.type === 'CREATE_TODO') {
		const idCreator = taskList.length;
		const task = {
			id: idCreator,
			text: action.payload.task,
			mode: action.payload.mode,
		};
		return [...taskList, task];
	}

	//deleting a task
	if (action.type === 'DELETE_TODO') {
		return taskList.filter((task) => {
			if (task.id !== action.payload.taskId) {
				return task;
			} else {
				return null;
			}
		});
	}

	if (action.type === 'CHANGE_MODE') {
		return taskList.filter((task) => {
			if (task.id === action.payload.id) {
				task.mode = action.payload.mode;
				return task;
			}
			return task;
		});
	}

	if (action.type === 'RESET_PROJECT') {
		taskList = [];
	}

	return taskList;
};

export const backgroundReducer = (img = 'default', action) => {
	if (action.type === 'CHANGE_BACKGROUND') {
		return (img = action.payload.img);
	}
	return img;
};

export const fontReducer = (font = 'Roboto', action) => {
	if (action.type === 'CHANGE_FONT') {
		return (font = action.payload.fontSelected);
	}
	return font;
};
export const colorReducer = (color = 'default', action) => {
	if (action.type === 'CHANGE_COLOR') {
		return (color = action.payload.color);
	}
	return color;
};

//
export default combineReducers({
	color: colorReducer,
	font: fontReducer,
	background: backgroundReducer,
	working: workingStateReducer,
	creatingTodo: creatingTodoReducer,
	taskList: pendingTodoListReducer,
});
