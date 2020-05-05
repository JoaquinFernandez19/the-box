import React, { useRef, useEffect } from 'react';
import { BsPlus } from 'react-icons/bs';
import TodoForm from '../TodoForm';
import { creatingNewTodo } from '../../actions';
import { connect } from 'react-redux';

//
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../util';
import { changeMode } from '../../actions';
//
//
const Pending = (props) => {
	//drop system
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item) => props.changeMode(item.id, 'pending'),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});
	//drop system
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

	return (
		<div
			className="toDo"
			ref={drop}
			style={{ backgroundColor: isOver ? '#ebecf075' : '' }}>
			<h4>Pending Tasks</h4>
			{props.children}

			<div className="add-todo" onClick={handleCreatingTodo} ref={btnRef}>
				<BsPlus className="add-todo-cion" />
				<p>Add a pending task</p>
			</div>

			<TodoForm />
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		creatingTodo: state.creatingTodo,
		pendingList: state.pendingList,
	};
};

export default connect(mapStateToProps, { creatingNewTodo, changeMode })(
	Pending,
);
