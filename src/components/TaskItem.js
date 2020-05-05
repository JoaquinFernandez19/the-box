import React from 'react';
import '../styles/taskItem.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { deleteTodo } from '../actions';
//Drag fucntion
import { useDrag } from 'react-dnd';
import { ItemTypes } from './util/index';

const TaskItem = (props) => {
	//drag
	const [{ isDragging }, drag] = useDrag({
		item: {
			type: ItemTypes.CARD,
			id: props.id,
			mode: props.mode,
		},
		collect: (monitor) => ({
			isDragging: !!monitor.isDragging(),
		}),
	});

	const closeTask = () => {
		props.deleteTodo(props.id);
	};

	return (
		<div
			id={props.id}
			className="task-item"
			ref={drag}
			style={{ opacity: isDragging ? 0.5 : 1 }}>
			<span className="color-state"></span>
			<p>{props.text}</p>
			<div className="hiden-delete" onClick={closeTask}>
				<AiOutlineClose className="icon" />
			</div>
		</div>
	);
};

export default connect(null, { deleteTodo })(TaskItem);
