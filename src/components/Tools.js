import React from 'react';
import '../styles/tools.scss';
import { connect } from 'react-redux';

//icons
import { FaRegTrashAlt, FaImage } from 'react-icons/fa';
import { GoTextSize } from 'react-icons/go';
import { IoIosColorPalette } from 'react-icons/io';

const anime = 'animated fadeIn';

const Tools = ({ working }) => {
	if (working) {
		return (
			<div className="tools">
				<FaImage className={`tools-icon ${anime}`} />
				<GoTextSize className={`tools-icon ${anime}`} />
				<IoIosColorPalette className={`tools-icon ${anime}`} />
				<FaRegTrashAlt className={`tools-icon ${anime}`} />
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

export default connect(mapStateToProps)(Tools);
