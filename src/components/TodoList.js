import React from 'react';
import '../styles/todoList.scss';
import { connect } from 'react-redux';
///
const TodoList = (props) => {
	if (props.working) {
		return (
			<div className="todoList animated fadeIn">
				<div className="toDo">
					<h2>Tareas pendientes</h2>
				</div>
				<div className="doing">
					<h2>En proceso</h2>
				</div>
				<div className="finished">
					<h2>Tareas terminadas</h2>
				</div>
			</div>
		);
	}
	return (
		<div className="todoList">
			<div className="start-title">
				<h1>First create a new project!</h1>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps)(TodoList);
