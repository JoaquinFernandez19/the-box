//Action creators

export const createProject = (projectName) => {
  return {
    type: "CREATE_PROJECT",
    payload: {
      projectName: projectName,
    },
  };
};
export const deleteProject = (projectName) => {
  return {
    type: "DELETE_PROJECT",
    payload: {
      projectName: projectName,
    },
  };
};
export const changeProjectName = (oldProjectName, newProjectName) => {
  return {
    type: "CHANGE_PROJECT_NAME",
    payload: {
      oldProjectName: oldProjectName,
      newProjectName: newProjectName,
    },
  };
};

export const createTodo = (task) => {
  return {
    type: "CREATE_TODO",
    payload: {
      task: task,
    },
  };
};

export const moveTodoToProgress = (task) => {
  return {
    type: "MOVE_TODO_PROGRESS",
    payload: {
      task: task,
    },
  };
};

export const moveTodoToFinish = (task) => {
  return {
    type: "MOVE_TODO_FINISH",
    payload: {
      task: task,
    },
  };
};
export const deleteTodo = (task) => {
  return {
    type: "DELETE_TODO",
    payload: {
      task: task,
    },
  };
};
export const changeBackground = (newImg) => {
  return {
    type: "CHANGE_BACKGROUND",
    payload: {
      newImg: newImg,
    },
  };
};
export const changeFont = (fontSelected) => {
  return {
    type: "CHANGE_FONT",
    payload: {
      fontSelected: fontSelected,
    },
  };
};
export const changeColor = (colorSelected) => {
  return {
    type: "CHANGE_COLOR",
    payload: {
      colorSelected: colorSelected,
    },
  };
};
