import React from 'react';
import { connect } from 'react-redux';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../util';
import { changeMode } from '../../actions';

const Finished = (props) => {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item) => props.changeMode(item.id, 'finished'),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<div
			className="finished"
			ref={drop}
			style={{ backgroundColor: isOver ? '#ebecf075' : '' }}>
			<h4>Finished tasks</h4>
			{props.children}
		</div>
	);
};

export default connect(null, { changeMode })(Finished);
