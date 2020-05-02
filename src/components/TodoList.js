import React from 'react';
import '../styles/todoList.scss';
import { connect } from 'react-redux';
//icons
import { BsPlus } from 'react-icons/bs';
///
const TodoList = (props) => {
	if (props.working) {
		return (
			<div className="todoList animated fadeIn">
				<div className="toDo">
					<h4>Tareas pendientes</h4>
					<div className="todo-column"></div>
					<span className="add-todo">
						<BsPlus />
						Add a pending task
					</span>
				</div>
				<div className="doing">
					<h4>En proceso</h4>
				</div>
				<div className="finished">
					<h4>Tareas terminadas</h4>
				</div>
			</div>
		);
	}
	return (
		<div className="start-title">
			<h1>A task manager</h1>
			<p>A click away of becoming organized (for free)</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps)(TodoList);
