//Action creators

export const startProject = () => {
	return {
		type: 'START_PROJECT',
	};
};
export const resetProject = () => {
	return {
		type: 'RESET_PROJECT',
	};
};
export const changeProjectName = (oldProjectName, newProjectName) => {
	return {
		type: 'CHANGE_PROJECT_NAME',
		payload: {
			oldProjectName: oldProjectName,
			newProjectName: newProjectName,
		},
	};
};

export const creatingNewTodo = () => {
	return {
		type: 'CREATING_TODO',
	};
};
export const cancelCreatingTodo = () => {
	return {
		type: 'CANCEL_CREATING_TODO',
	};
};

export const createTodo = (task) => {
	return {
		type: 'CREATE_TODO',
		payload: {
			task: task,
			mode: 'pending',
		},
	};
};

export const changeMode = (id, mode) => {
	return {
		type: 'CHANGE_MODE',
		payload: {
			id: id,
			mode: mode,
		},
	};
};

export const deleteTodo = (taskId) => {
	return {
		type: 'DELETE_TODO',
		payload: {
			taskId: taskId,
		},
	};
};
export const changeBackground = (img) => {
	return {
		type: 'CHANGE_BACKGROUND',
		payload: {
			img: img,
		},
	};
};
export const changeFont = (fontSelected) => {
	return {
		type: 'CHANGE_FONT',
		payload: {
			fontSelected: fontSelected,
		},
	};
};
export const changeColor = (color) => {
	return {
		type: 'CHANGE_COLOR',
		payload: {
			color: color,
		},
	};
};
