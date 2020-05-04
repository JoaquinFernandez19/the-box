import React from 'react';
import '../styles/taskItem.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';

const TaskItem = (props) => {
	const closeTask = () => {
		props.deleteTodo(props.id);
	};

	return (
		<div id={props.id} className="task-item">
			<p>{props.text}</p>
			<div className="hiden-delete" onClick={closeTask}>
				<AiOutlineClose className="icon" />
			</div>
		</div>
	);
};

export default connect(null, { deleteTodo })(TaskItem);
