import React from 'react';
import '../styles/header.scss';
import { FaTasks } from 'react-icons/fa';
import { IoMdCheckboxOutline } from 'react-icons/io';
//redux
import { connect } from 'react-redux';
import { startProject } from '../actions';
//
const Header = (props) => {
	const handleStartProject = () => {
		props.startProject();
	};

	if (props.working) {
		return (
			<div className="header">
				<div className="new-project-btn active" onClick={handleStartProject}>
					<p>Working</p>
					<FaTasks className="add-icon" />
				</div>
				<h2>The Box</h2>
			</div>
		);
	}
	return (
		<div className="header">
			<div className="new-project-btn" onClick={handleStartProject}>
				<p>Start</p>
				<IoMdCheckboxOutline className="add-icon" />
			</div>
			<h2>The Box</h2>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		working: state.working,
	};
};

export default connect(mapStateToProps, { startProject })(Header);
