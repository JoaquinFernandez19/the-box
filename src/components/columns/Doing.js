import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../util';
import { connect } from 'react-redux';
import { changeMode } from '../../actions';

const Doing = (props) => {
	const [{ isOver }, drop] = useDrop({
		accept: ItemTypes.CARD,
		drop: (item) => props.changeMode(item.id, 'doing'),
		collect: (monitor) => ({
			isOver: !!monitor.isOver(),
		}),
	});

	return (
		<div
			className="doing"
			ref={drop}
			style={{ backgroundColor: isOver ? '#ebecf075' : '' }}>
			<h4>Working on it</h4>
			{props.children}
		</div>
	);
};

export default connect(null, { changeMode })(Doing);
