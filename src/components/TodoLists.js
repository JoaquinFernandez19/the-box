import React, { useRef, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import { connect } from 'react-redux';
import { creatingNewTodo } from '../actions';
//components
import TodoForm from './TodoForm';
import TaskItem from './TaskItem';
//
import '../styles/todoLists.scss';
//helper

const TodoLists = (props) => {
	const btnRef = useRef();

	const handleCreatingTodo = () => {
		props.creatingNewTodo();
	};

	useEffect(() => {
		if (props.creatingTodo) {
			btnRef.current.style.display = 'none';
		} else {
			btnRef.current.style.display = 'flex';
		}
	}, [props.creatingTodo]);

	const pendingList = props.pendingList.map((task) => {
		return <TaskItem key={task.id} id={task.id} text={task.text} />;
	});

	return (
		<div className="content animated fadeIn">
			<div className="toDo">
				<h4>Pending Tasks</h4>
				{pendingList}

				<div className="add-todo" onClick={handleCreatingTodo} ref={btnRef}>
					<BsPlus className="add-todo-cion" />
					<p>Add a pending task</p>
				</div>

				<TodoForm />
			</div>

			<div className="doing">
				<h4>Working on it</h4>
			</div>
			<div className="finished">
				<h4>Finished tasks</h4>
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		creatingTodo: state.creatingTodo,
		pendingList: state.pendingList,
	};
};

export default connect(mapStateToProps, { creatingNewTodo })(TodoLists);
