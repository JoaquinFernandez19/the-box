import React from 'react';
import '../styles/tools.scss';
import { connect } from 'react-redux';

//icons
import { FaSkullCrossbones, FaImage } from 'react-icons/fa';
import { GoTextSize } from 'react-icons/go';
import { IoIosColorPalette } from 'react-icons/io';
import { resetProject, cancelCreatingTodo } from '../actions';

const anime = 'animated fadeIn';

const Tools = (props) => {
	const resetProject = () => {
		if (
			window.confirm('Are you sure you want to restart the current project?')
		) {
			props.resetProject();
			props.cancelCreatingTodo();
		}
	};

	if (props.working) {
		return (
			<div className="tools">
				<FaImage className={`tools-icon ${anime}`} />
				<GoTextSize className={`tools-icon ${anime}`} />
				<IoIosColorPalette className={`tools-icon ${anime}`} />
				<FaSkullCrossbones
					className={`tools-icon ${anime}`}
					onClick={resetProject}
				/>
			</div>
		);
	}
	return null;
};

const mapStateToProps = (state) => {
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps, { resetProject, cancelCreatingTodo })(
	Tools,
);
