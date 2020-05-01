import { combineReducers } from 'redux';

//Reducers!
export const workingStateReducer = (working = false, action) => {
	if (action.type === 'START_PROJECT') {
		return (working = true);
	}
	return working;
};

//
export default combineReducers({
	working: workingStateReducer,
});
