import React from 'react';

import { connect } from 'react-redux';
//components
import PreWorkPage from './PreWorkPage';
import TodoLists from './TodoLists';
//icons

///
const Content = (props) => {
	if (props.working) {
		return (
			<TodoLists/>
		);
	}
	return (
		<PreWorkPage/>
	);
};

const mapStateToProps = (state) => {
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps)(Content);
