import React from 'react';

import { connect } from 'react-redux';

//components

import TaskItem from './TaskItem';
import Doing from './columns/Doing';
import Finished from './columns/Finished';
import Pending from './columns/Pending';
//
import '../styles/todoLists.scss';

const TodoLists = (props) => {
	//drag and drop

	const pendingList = props.taskList.map((task) => {
		if (task.mode === 'pending') {
			return (
				<TaskItem
					key={task.id}
					id={task.id}
					text={task.text}
					mode={task.mode}
				/>
			);
		}
	});

	const doingList = props.taskList.map((task) => {
		if (task.mode === 'doing') {
			return (
				<TaskItem
					key={task.id}
					id={task.id}
					text={task.text}
					mode={task.mode}
				/>
			);
		}
	});
	const finishedList = props.taskList.map((task) => {
		if (task.mode === 'finished') {
			return (
				<TaskItem
					key={task.id}
					id={task.id}
					text={task.text}
					mode={task.mode}
				/>
			);
		}
	});

	return (
		<div className="content animated fadeIn">
			<Pending> {pendingList}</Pending>

			<Doing> {doingList}</Doing>

			<Finished>{finishedList} </Finished>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		taskList: state.taskList,
		doingList: state.doingList,
		finishedList: state.finishedList,
	};
};

export default connect(mapStateToProps)(TodoLists);
