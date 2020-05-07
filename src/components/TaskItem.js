import React from 'react';
import '../styles/taskItem.scss';
import { AiOutlineClose } from 'react-icons/ai';
import { connect } from 'react-redux';
import { deleteTodo, changeMode } from '../actions';

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
	const handleMobileChangeMode = () => {
		if (props.mode === 'pending') {
			props.changeMode(props.id, 'doing');
		} else if (props.mode === 'doing') {
			props.changeMode(props.id, 'finished');
		} else {
			props.changeMode(props.id, 'pending');
		}
	};

	return (
		<div id={props.id} className="task-item" ref={drag} draggable="true">
			<span className="color-state" onClick={handleMobileChangeMode} />
			<p>{props.text}</p>

			<div className="hiden-delete" onClick={closeTask}>
				<AiOutlineClose className="icon" />
			</div>
		</div>
	);
};

export default connect(null, { deleteTodo, changeMode })(TaskItem);
